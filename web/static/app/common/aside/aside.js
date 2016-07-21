/**
 * Created by yanshi0429 on 16/6/23.
 */
angular.module("my.aside",[]).directive("appAside",[function(){
    return {
        templateUrl:"/app/common/aside/aside.html",
        replace:true,
        scope:true,
        restrict:'E',
        controller:["$scope","myData",function($scope,myData){
            var vm = $scope.vm = {
            };
        }]
    };
}]);