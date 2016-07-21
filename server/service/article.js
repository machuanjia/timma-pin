/**
 * Created by yanshi0429 on 16/6/18.
 */
var mongoose = require('mongoose');
var models = require('../model');
var Article = function(){
    var self = this;
    self.model = models.article;
    Article.prototype.getArticles = function (callBack) {
        self.model.find().populate('author').exec(function(err,docs){
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
    Article.prototype.addArticle = function (title,author,callBack) {
        var article = new self.model({
            title:title,
            author:author
        });
        article.save(function(err){
            if (err && err.code) {
                return callBack(null, err.code);
            } else if (err) {
                return callBack(err);
            }
            return callBack(null, 200,Article);
        });
    };
    Article.prototype.removeArticle = function (_id,callBack) {
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

exports = module.exports = Article;
