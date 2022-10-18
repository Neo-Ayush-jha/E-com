var mongoose = require("mongoose");
var addressModel = mongoose.Schema({
    'street': { type: String, require: true },
    'landmark': { type: String, require: true },
    'pin': { type: Number, require: true },
    'city': { type: String, require: true },
    'state': { type: String, require: true },
    'name': { type: String, require: true },
    'contact': { type: Number, require: true },
    'user_id': { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
});
var address = mongoose.model('address', addressModel);
module.exports = address;