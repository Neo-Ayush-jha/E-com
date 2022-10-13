var mongoose= require ('mongoose');
var orderModel = mongoose.Schema({
    'ordered':{type:Boolean,require:trie},
    'isDelivered':{type:Boolean,require:true},
    'isProcessing':{type:Boolean,require:true},
    'isShipped':{type:Boolean,require:true},
    'dateOfOrder':{type:Date},
    'user_id':{type:mongoose.Schema.type.ObjectId,ref:"user"},
    'address_id':{type:mongoose.Schema.type.ObjectId,ref:"address"},
});
var order = mongoose.model("order",orderModel);
module.exports = order;