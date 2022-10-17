var mongoose = require('mongoose');
var orderItemModel = mongoose.Schema({
    'ordered':{type:Boolean,require:true},
    'qty':{type:Number,require:true},
    'order_id':{type:mongoose.Schema.Types.ObjectId,ref:"order"},
    'product_id':{type:mongoose.Schema.Types.ObjectId,red:"product"},
    'status':{type:Number,require:true,default:1},
});
var orderItem = mongoose.model("orderItem",orderItemModel);
module.exports=orderItem;
// 0 = normal product  
// 1 = add to buy    
// 2 = by now