/**
 * Created by yanshi0429 on 16/6/18.
 */
angular.module('my.data',[]).factory("myData",["$http",function($http){
    return {
      user:{
          getUsers:function(){
              return $http.get('/api/users');
          },
          getUser:function(_id){
              return $http.get('/api/user/'+_id);
          },
          addUser:function(name){
              return $http.post('/api/user',{
                  name:name
              });
          },
          removeUser:function(_id){
              return $http.delete('/api/user/'+_id);
          },
          login : function(name,passowrd){
              return $http.post('/api/login',{
                  name:name,
                  passowrd:passowrd
              });
          },
          logout : function(){
              return $http.get('/logout');
          },
          register : function(name,passowrd){
              return $http.post('/api/register',{
                  name:name,
                  passowrd:passowrd
              });
          }

      },
      article:{
          getArticles:function(){
              return $http.get('/api/articles');
          },
          addArticle:function(title){
              return $http.post('/api/article',{
                  title:title
              });
          },
          removeArticle:function(_id){
              return $http.delete('/api/article/'+_id);
          }
      }
    };
}]);