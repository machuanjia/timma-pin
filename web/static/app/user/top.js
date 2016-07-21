/**
 * Created by yanshi0429 on 16/6/18.
 */
angular.module('my.user',[]).controller('userCtrl',['$scope','myData',function($scope,myData){
    var vm = $scope.vm = {
        name:'',
        users:[{
            _id:0,
            name:'zhangsan'
        },{
            _id:1,
            name:'lisi'
        }]
    };

    vm.addUser = function(){
        myData.user.addUser(vm.name).success(function(rv){
            if(rv.code == 200){
                vm.users.push(rv.data);
            }
        }).error(function(err){
        });

    };
    vm.removeUser = function(_id){
        myData.user.removeUser(_id).success(function(rv){
            _.remove(vm.users,function(n){
                return n._id === _id
            })
        });

    };

    var getUsers = function(){
        myData.user.getUsers().success(function(rv){
            vm.users = rv.data;
        }).error(function(err){
        });
    };

    getUsers();



}]);