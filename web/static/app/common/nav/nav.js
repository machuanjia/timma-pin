/**
 * Created by yanshi0429 on 16/6/23.
 */
angular.module("my.nav",[]).directive("appNav",[function(){
    return {
      templateUrl:"/app/common/nav/nav.html",
      replace:true,
      scope:true,
      restrict:'E',
      controller:["$scope","myData",function($scop,myData){
          var vm = $scop.vm = {
              navs:[
                  {
                      name:'热点',
                      className:'fa fa-star',
                      active:true
                  },{
                      name:'专题',
                      className:'fa fa-th-list'
                  },{
                      name:'讲座',
                      className:'fa fa-graduation-cap'
                  }
              ]
          }
          vm.logout = function(){
              myData.user.logout().success(function(rv){
                  location.href = '/';
              }).error(function(err){
              });
          }
      }]
    };
}]);