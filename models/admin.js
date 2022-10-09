var mongoose =require("mongoose");
var AdminModel = mongoose.Schema({
    email:{type:String,require:true},
    passwor:{type:String,require:true},
});
var admin=mongoose.model("admin",AdminModel);
module.exports=admin;