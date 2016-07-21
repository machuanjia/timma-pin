/**
 * Created by yanshi0429 on 16/6/28.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title    : {type: String},
    abstract: {type: String},
    author  : {
        type:Schema.ObjectId,
        ref:'user'
    }

});
exports = module.exports = mongoose.model("article", ArticleSchema);