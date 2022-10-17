var mongoose = require('mongoose');
var cartModel = mongoose.Schema({
    // 'ordered':{type:Boolean,require:true},
    // 'order_id':{type:mongoose.Schema.Types.ObjectId,ref:"order"},
    // 'qty':{type:Number,require:true,default:1},
    'user_id':{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    'product_id':{type:mongoose.Schema.Types.ObjectId,red:"product"},
    'status':{type:Number,require:true,default:1},
});
var cart = mongoose.model("cart",cartModel);
module.exports=cart;
// 0 = normal product  
// 1 = add to buy    
// 2 = by now