var mongoose = require('mongoose');
var userModel = mongoose.Schema({
    user_name:{type:String,require:true},
    image:{type:String,require:true},
    user_email:{type:String,require:true},
    user_userType:{type:String,default:1},
    user_contact:{type:Number,require:true},
    user_password:{type:String,require:true},
    user_gender:{type:String,require:true},
});
var user = mongoose.model("user",userModel);
module.exports = user;