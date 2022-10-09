var express = require('express');
const { showFormOfProduct, showCatForm, showBrandForm, catForm, formBrand, formProduct } = require('../controllers/adminController');
const { shoForm, form } = require('../controllers/userController');
const upload = require("../middlewares/upload");
var router = express.Router();
router.get("/",function(req,res){
    res.render("index");
});
router.get("/admin",function(req,res){
    res.render("admin/home");
});
router.get("/signup",shoForm);
router.post("/signup",upload.single('image'),form.insert);
// -------------------------------------------------------------admin------------------------------------------------------
router.get("/admin/insert-product/",showFormOfProduct)
router.post("/admin/product/form",formProduct);
router.get("/admin/category/insert/",showCatForm);
router.post("/admin/category/insert/",catForm);
router.get("/admin/brand/form/",showBrandForm);
router.post("/admin/brand/form",formBrand);

module.exports = router;