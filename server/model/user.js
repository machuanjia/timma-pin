/**
 * Created by yanshi0429 on 16/6/18.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:{type:String,required:true},
    password:{type:String,required:true}
});
exports = module.exports = mongoose.model("user", UserSchema);