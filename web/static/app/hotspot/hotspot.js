/**
 * Created by yanshi0429 on 16/6/26.
 */
angular.module('my.hotsport',[]).controller("hotsportCtrl",["$scope","hotsportService","myData",function($scope,hotsportService,myData){
    var vm = $scope.vm = {
        article:{
            name:''
        }
    };
    vm.addArticle = function(){
        myData.article.addArticle(vm.article.name).success(function(rv){
            //debugger
        }).error(function(err){
            //debugger
        });
    };
    vm.getArticles = function(){
        myData.article.getArticles().success(function(rv){
            //debugger
        }).error(function(err){
            //debugger
        });
    }

    vm.getArticles();
}]);