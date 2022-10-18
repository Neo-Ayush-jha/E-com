const { response } = require("express");
var UserModel = require('../models/user');
var brandModel = require('../models/brand');
var productModel = require('../models/product');
var categoryModel = require('../models/category');
var checkoutModel = require('../models/checkout');
async function getUser(req) {
    std = await UserModel.findById(req.session.user_id);
    return std;
}
function userLogin(req, res) {
    res.render("login");
}
async function checkUser(req, res) {
    var { user_email, user_password } = req.body;
    var account = await UserModel.findOne({ user_email: user_email });
    if (account.user_email === user_email && account.user_password === user_password) {
        req.session.user_id = account._id;
        req.session.product_id = '634328681961fe8c1a39b725';
        let product_id = req.session.product_id;
        console.log(product_id)
        if (!product_id) {
            res.redirect('/');
        }
        else {
            res.redirect(`/cart/add`);
        }
    } else {
        res.send("some thing is wrong");
    }
}
function Logout(req, res) {
    req.session.destroy();
    res.redirect("/");
}
function shoForm(req, res) {
    res.render("apply");
}
class formApply {
    static insert = async (req, res) => {
        try {
            var user = new UserModel({
                image: req.file.filename,
                user_name: req.body.user_name,
                user_contact: req.body.user_contact,
                user_email: req.body.user_email,
                user_password: req.body.user_password,
                user_gender: req.body.user_gender,
            })
            await user.save();
            console.log('data inserted successfully');
        } catch (error) {
        }
        res.redirect("/signup");
    }

}
async function Product(req, res) {
    var data = await productModel.find().populate("product_cat_id").populate("product_brand_id");
    res.render("index", { 'product': data });
}
async function singleProduct(req, res) {
    let id = req.params.id;
    const data = await productModel.findById(id).populate("product_cat_id").populate("product_brand_id");
    var tata = await productModel.find().populate("product_cat_id").populate("product_brand_id");
    var user = await UserModel.find();
    res.render('singleProduct', { 'product': data, 'tt': tata, 'user': user });
}

function checkOut(req, res) {
    res.render("checkOut");
}
async function checkoutForm(req, res) {
    var check = new checkoutModel({
        user_name: req.body.user_name,
        user_last_name: req.body.user_last_name,
        user_contact: req.body.user_contact,
        user_email: req.body.user_email,
        user_address1: req.body.user_address1,
        user_address2: req.body.user_address2,
        user_city: req.body.user_city,
        country: req.body.country,
        user_state: req.body.user_state,
        user_pin: req.body.user_pin,
    })
    await check.save(); res.redirect('/checkout/:id');
}

module.exports = {
    Logout,
    Product,
    shoForm,
    checkOut,
    formApply,
    checkUser,
    userLogin,
    checkoutForm,
    singleProduct,
}