var categoryModel=require('../models/category');
var brandModel=require('../models/brand');
var productModel=require('../models/product');
const user = require('../models/user');
const save = require('save');
const { response } = require('express');
function showCatForm(req,res){
    res.render("admin/insertProduct");
}
function catForm(req,res){
    var cat=new categoryModel({
        'cat_title':req.body.cat_title,
        'cat_description':req.body.cat_description,
    });
    cat.save();
    res.redirect('/admin/insert-product');
    console.log(cat);
}
function showBrandForm(req,res){
    res.render("admin/insertProduct");
}
function formBrand(req,res){
    var brand =new brandModel({
        'brand_name':req.body.brand_name,
    });
    brand.save();
    res.redirect("/admin/insert-product");
    console.log(brand);
}
async function showFormOfProduct(req,res){
    var data =await brandModel.find({});
    var dd =await categoryModel.find({});
    res.render("admin/insertProduct",{'brand':data,'catagory':dd});
}
function formProduct(req,res){
    var product = new productModel({
        'product_name':req.body.product_name,
        'product_price':req.body.product_price,
        'product_descount':req.body.product_descount,
        'product_qyt':req.body.product_qyt,
        'product_brand_id':req.body.product_brand_id,
        'product_cat_id':req.body.product_cat_id,
    });
    product.save();
    res.redirect('/admin/insert-product');
    console.log(product);
}
module.exports={
    showFormOfProduct,
    showBrandForm,
    showCatForm,
    catForm,
    formBrand,
    formProduct,
}