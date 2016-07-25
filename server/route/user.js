(function () {
  'use strict';

  var api = require('../api');

  module.exports = exports = function (app) {
    app.get('/api/users', api.user.getUsers);
    app.get('/api/user/:_id', api.user.getUser);
    app.post('/api/user', api.user.addUser);
    app.delete('/api/user/:_id', api.user.removeUser);

    app.post("/login",api.user.login);
    app.get("/logout",api.user.logout);
    app.post("/register",api.user.register);


    //app.use(function (error, req, res, next) {
    //    return res.render('common/error.html', {locale: locale});
    //});
  };
})();