var mongoose =require("mongoose");
var categoryModel=mongoose.Schema({
    cat_title:{type:String,require:true},
    cat_description:{type:String,require:true},
});
var category= mongoose.model("category",categoryModel);
module.exports=category;