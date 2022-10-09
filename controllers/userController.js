const {response} = require("express");
var UserModel = require('../models/user');

function shoForm(req,res){
    res.render("apply");
}
class  form{
    static insert = async(req,res)=>{
        try{
            var user = new UserModel({
                image:req.file.filename,
                user_name:req.body.user_name,
                user_contact:req.body.user_contact,
                user_email:req.body.user_email,
                user_password:req.body.user_password,
                user_gender:req.body.user_gender,
            });
            await user.save();
            console.log(user); 
            console.log(req.file.filename);
            console.log('data inserted successfully');
        }catch(error){
            console.log(error);
        }
        res.redirect("/signup");
    }
}

module.exports={
    shoForm,
    form,
}