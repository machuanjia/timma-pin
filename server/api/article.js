/**
 * Created by yanshi0429 on 16/6/13.
 */
var Service = require('../service');
var ArticleApi = function(){
};
ArticleApi.prototype.getArticles = function(req, res, next){
    Service.article.getArticles(function (err, users) {
        if (err) {
            return next(err);
        }
        return res.send({data: users, code: 200});
    });
};
ArticleApi.prototype.addArticle = function(req,res,next){
    var _title = req.body.title;
    Service.article.addArticle(_title,req.session.user,function (err, code,art) {
        if (err) {
            return next(err);
        }
        return res.send({code: code,data:art});
    });
};
ArticleApi.prototype.removeArticle = function(req,res,next){
    console.log(req.params._id);
    Service.article.removeArticle(req.params._id,function (err, code) {
        if (err) {
            return next(err);
        }
        return res.send({code: code});
    });
};

module.exports = exports = ArticleApi;