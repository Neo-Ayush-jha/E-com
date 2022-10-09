var mongoose =require("mongoose");
var brandModel = mongoose.Schema({
    brand_name:{type:String,require:true},
});
var brand=mongoose.model("brand",brandModel);
module.exports=brand;