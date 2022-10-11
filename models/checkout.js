var mongoose = require('mongoose');
var checkoutModel = mongoose.Schema({
    user_name:{type:String,require:true},
    user_last_name:{type:String,require:true},
    user_contact:{type:String,require:true},
    user_email:{type:String,require:true},
    user_address1:{type:String,require:true},
    user_address2:{type:String,require:true},
    country:{type:String,require:true},
    user_city:{type:String,require:true},
    user_state:{type:String,require:true},
    user_pin:{type:String,require:true},
});
var checkOut=mongoose.model('checkout',checkoutModel);
module.exports=checkOut;