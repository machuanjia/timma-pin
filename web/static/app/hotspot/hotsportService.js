/**
 * Created by yanshi0429 on 16/6/26.
 */
/**
 * Created by yanshi0429 on 16/6/26.
 */
angular.module('my.hotsport').factory("hotsportService",["myData",function(myData){
    var _self = this;
    return {
        toolbars:[{
            text:'收藏',
            className:'fa fa-briefcase'
        }],
        getHotList:function(){
            //myData.user.getUser("5764eba3371813790fd41013").success(function(rv){
            //    debugger
            //}).error(function(err){
            //    debugger
            //});
            myData.article.addArticle('这个是第一个文章!').success(function(rv){
                debugger
            }).error(function(err){
                debugger
            });
            myData.article.getArticles().success(function(rv){
                debugger
            }).error(function(err){
                debugger
            });
        }
    }
}]);