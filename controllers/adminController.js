const save = require('save');
const user = require('../models/user');
const { response } = require('express');
var brandModel = require('../models/brand');
var AdminModel = require('../models/admin')
var productModel = require('../models/product');
var categoryModel = require('../models/category');

function adminHome(req, res) {
    res.render('admin/home');
}
// function InsertAdmin(req,res){
//             var admin= new AdminModel({
//             email:"gmail",
//             password:'123'
//         });
//         admin.save();
//     }

function adminLogin(req, res) {
    res.render("admin/login");
}
async function checkAdmin(req, res) {
    var { email, password } = req.body;
    var account = await AdminModel.findOne({ email: email });
    console.log(account);
    if (account) {
        if (account.email === email && account.password === password) {
            req.session.admin_id = account._id;
            res.redirect('/admin/home');
            console.log('yes admin is valid');
        }
        else {
            res.send("wrong email pleace try agan");
        }
    }
    else {
        res.send("you are not valid")
    }
}
function showCatForm(req, res) {
    res.render("admin/insertProduct");
}
function catForm(req, res) {
    var cat = new categoryModel({
        'cat_title': req.body.cat_title,
        'cat_description': req.body.cat_description,
    });
    cat.save();
    res.redirect('/admin/product/form');
    console.log(cat);
}
function showBrandForm(req, res) {
    res.render("admin/insertProduct");
}
function formBrand(req, res) {
    var brand = new brandModel({
        'brand_name': req.body.brand_name,
    });
    brand.save();
    res.redirect("/admin/product/form");
    console.log(brand);
}
async function showFormOfProduct(req, res) {
    var data = await brandModel.find({});
    var dd = await categoryModel.find({});
    res.render("admin/insertProduct", { 'brand': data, 'catagory': dd });
}
class formProduct {
    static insert = async (req, res) => {
        console.log('data inserted successfully');
        try {
            var product = new productModel({
                'product_image': req.file.filename,
                'product_name': req.body.product_name,
                'product_price': req.body.product_price,
                'product_discription': req.body.product_discription,
                'product_qyt': req.body.product_qyt,
                'product_brand_id': req.body.product_brand_id,
                'product_cat_id': req.body.product_cat_id,
            })
            await product.save();
            console.log(product);
            console.log('data inserted successfully');
        } catch (error) {
            console.log(error);
        }
        res.redirect('/admin/product/form');
    }
}
async function showProduct(req, res) {
    var data = await productModel.find().populate("product_cat_id").populate("product_brand_id");
    res.render("admin/showProduct", { 'product': data });
}
module.exports = {
    showFormOfProduct,
    showBrandForm,
    showCatForm,
    catForm,
    formBrand,
    formProduct,
    showProduct,
    adminHome,
    adminLogin,
    checkAdmin,
    // InsertAdmin,
}