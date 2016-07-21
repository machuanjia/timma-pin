/**
 * Created by yanshi0429 on 16/6/13.
 */
angular.module('my.route', []).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider
        .otherwise('/');

    $stateProvider.state("home", {
        url        : "/",
        templateUrl: "/app/init/index.html",
        controller : "appHome"
        //resolve    : {
        //    globalData: ["globalDataContext", function (globalDataContext) {
        //        return globalDataContext.all();
        //    }]
        //}
    }).state("collections",{
        url:'collections',
        templateUrl:"/app/user/top.html",
        parent:'home',
        controller:"userCtrl"
    }).state("user",{
        url:'user',
        templateUrl:"/app/user/top.html",
        parent:'home',
        controller:"userCtrl"
    }).state("hotsport",{
        url:'hotsport',
        parent:'home',
        templateUrl:"/app/hotspot/hotspot.html",
        controller:"hotsportCtrl"
    });


    $locationProvider.html5Mode(true);
}]);