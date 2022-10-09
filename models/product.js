var mongoose=require("mongoose");
var productModle = mongoose.Schema({
    product_name:{type:String,require:true},
    product_price:{type:String,require:true},
    product_qyt:{type:String,require:true},
    product_discription:{type:String,require:true},
    product_image:{type:String,require:true},
    product_brand_id:{type:mongoose.Schema.Types.ObjectId,ref:"brand"},
    product_cat_id:{type:mongoose.Schema.Types.ObjectId,ref:"category"},
});
var product=mongoose.model("product",productModle);
module.exports=product;