var mongoose = require('mongoose')
const DBConnect = async(url)=>{
    try{
        await mongoose.connect(url);
        console.log("connect db");
    }
    catch(error){
        console.log("not connect db");
    }
}
module.exports = DBConnect;