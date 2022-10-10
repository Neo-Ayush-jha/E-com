const {response} = require("express");
var UserModel = require('../models/user');
var brandModel=require('../models/brand');
var productModel=require('../models/product');
var categoryModel=require('../models/category');
// const { connect } = require("../routers/router");

function shoForm(req,res){
    res.render("apply");
}
class  formApply{
    static insert = async(req,res)=>{
        try{
            var user = new UserModel({
                image:req.file.filename,
                user_name:req.body.user_name,
                user_contact:req.body.user_contact,
                user_email:req.body.user_email,
                user_password:req.body.user_password,
                user_gender:req.body.user_gender,
            })
            await user.save();
            console.log(req.file.filename);
            console.log('data inserted successfully');
        }catch(error){
            console.log(error);
        }
        res.redirect("/signup");
    }
    
}
async function Product(req,res){
    var data = await productModel.find().populate("product_cat_id").populate("product_brand_id");
    res.render("index",{'product':data});
}
async function singleProduct(req,res){
    var data = await productModel.findById();
    res.render('singleProduct',{'product':data}); 
}

module.exports={
    shoForm,
    formApply,
    Product,
    singleProduct,
}