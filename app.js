var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var expressLayouts = require("express-ejs-layouts");
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var routes = require('./server/route');


var app = express();


// view engine setup
app.use(express.static(path.join(__dirname, '/web/static'), {maxAge: 1000 * 60 * 60 * 24 * 7}));
app.set('views', path.join(__dirname, '/web/view'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.set('layout', 'layout');
app.use(expressLayouts);

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//redis-server
app.use(session({
  store: new RedisStore({
    host:"localhost",
    port:'6379'
  }),
  secret: 'Timma'
}));
routes(app);

//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  return res.render('app/common/error', {title: 'MyAppExpress', layout: "app/layout.html"});
//});

app.listen(5000,"localhost");
module.exports = app;
