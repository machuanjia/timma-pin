/**
 * Created by yanshi0429 on 16/6/18.
 */
var mongoose = require('mongoose'),
    connectTimes = 0;
var UserData = require('./user');
var ArticleData = require('./article');

// #7366
var connect = function () {
    connectTimes++;
    if (connectTimes > 5) {
        return;
    }
    var url = "mongodb://localhost/user";
    //var options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect(url, function (err) {
        if (err) {
            console.log("connect mongodb [" + url + ']' + err);
        } else {
            console.log("connect mongodb [" + url + "] successfully...");
        }
    });
};

// Error handler
mongoose.connection.on('error', function (err) {
    console.log(err)
});

// Reconnect when closed
mongoose.connection.on('disconnected', function () {
    connect();
});

// Connect mongodb

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

connect();


exports = module.exports = {
  user:new UserData(),
  article:new ArticleData()
};