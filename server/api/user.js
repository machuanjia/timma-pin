/**
 * Created by yanshi0429 on 16/6/13.
 */
var UserService = require('../service');
var UserApi = function(){
};
UserApi.prototype.getUsers = function(req, res){
    UserService.user.getUsers(function (err, users) {
        if (err) {
            req.session.error =  '获取人员失败！';
            res.sendStatus(500);
        }
        return res.send({data: users, code: 200});
    });
};
UserApi.prototype.getUser = function(req, res){
    var obj = {
    };
    if(req.params._id){
        obj._id=req.params._id;
    }
    UserService.user.getUser(obj,function (err, user) {
        if (err) {
            req.session.error =  '获取人员失败！';
            res.sendStatus(500);
        }
        return res.send({data: user, code: 200});
    });
};
UserApi.prototype.addUser = function(req,res,next){
    UserService.user.addUser(req.body.name,req.body.password,function (err, code,user) {
        if (err) {
            req.session.error =  '添加人员失败！';
            res.sendStatus(404);
        }
        return res.send({code: code,data:user});
    });
};
UserApi.prototype.removeUser = function(req,res,next){
    console.log(req.params._id);
    UserService.user.removeUser(req.params._id,function (err, code) {
        if (err) {
            req.session.error =  '删除人员失败！';
            res.sendStatus(500);
        }
        return res.send({code: code});
    });
};
UserApi.prototype.login = function(req,res,next){
    if(!req.body.name){
        req.session.error =  '网络异常！';
        res.sendStatus(500);
    }
    UserService.user.getUser({name:req.body.name},function (err, user) {
        console.log("adad")
        if (err) {
            return next(err);
        }else if(!user){
            res.sendStatus(500);
            req.session.error =  '不存在！';
        }else{
            console.log("adsad")
            req.session.user = user;
            //res.redirect("/hotsport");
            return res.send({data: user, code: 200});
        }

    });
};


UserApi.prototype.logout = function(req,res,next){
    req.session.user = null;
    req.session.error = null;
    res.sendStatus(200);
};

UserApi.prototype.register = function(req,res,next){
    UserService.user.getUser({name:req.body.name},function (err, doc) {
        if(err){
            res.sendStatus(500);
            req.session.error =  '网络异常错误！';
        }else if(doc){
            req.session.error = '用户名已存在！';
            res.sendStatus(500);
        }else{
            UserService.user.addUser(req.body.name,req.body.password,function(err,code,doc){
                if (err) {
                    res.sendStatus(500);
                    console.log(err);
                } else {
                    req.session.error = '用户名创建成功！';
                    res.sendStatus(code);
                }

            });
        }
    });
};


module.exports = exports = UserApi;