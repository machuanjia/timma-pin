/**
 * Created by yanshi0429 on 16/6/18.
 */
var mongoose = require('mongoose');
var models = require('../model');
var User = function(){
    var self = this;
    self.model = models.user;
    User.prototype.getUsers = function (callBack) {
        self.model.find(function(err,docs){
            if (err) {
                return callBack(err);
            }
            if (docs) {
                return callBack(null, docs);
            } else {
                return callBack(null, "");
            }
        });
    };

    User.prototype.getUser = function (json,callBack) {
        var _obj = {
        };
        if(json._id){
            _obj._id = json._id;
        }
        if(json.name){
            _obj.name = json.name;
        }
        if(json.password){
            _obj.password = json.password;
        }
        self.model.findOne(_obj,function(err,docs){
            console.log(docs)
            if (err) {
                return callBack(err);
            }
            if (docs) {
                return callBack(null, docs);
            } else {
                return callBack(null, null);
            }
        });
    };

    User.prototype.addUser = function (name,password,callBack) {
        var user = new self.model({
            name:name,
            password:password
        });
        user.save(function(err){
            if (err && err.code) {
                return callBack(null, err.code);
            } else if (err) {
                return callBack(err);
            }
            return callBack(null, 200,user);
        });
    };
    User.prototype.removeUser = function (_id,callBack) {
        self.model.remove({_id:_id},function(err){
            if (err && err.code) {
                return callBack(null, err.code);
            } else if (err) {
                return callBack(err);
            }
            return callBack(null, 200);
        });
    };
};

exports = module.exports = User;
