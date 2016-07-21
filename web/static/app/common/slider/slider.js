/**
 * Created by yanshi0429 on 16/6/23.
 */
angular.module("my.slider",[]).directive("appSlider",[function(){
    return {
        templateUrl:"/app/common/slider/slider.html",
        replace:true,
        scope:true,
        restrict:'E',
        controller:["$scope",function($scop){

        }]
    };
}]);