var express = require('express');
var router = express.Router();
const upload = require("../middlewares/upload");
const { shoForm, formApply, Product } = require('../controllers/userController');
const { showFormOfProduct, showCatForm, showBrandForm, catForm, formBrand, formProduct, showProduct } = require('../controllers/adminController');

router.get("/",Product);
router.get("/admin",function(req,res){
    res.render("admin/home");
});
// router.get("/admin/register",InsertAdmin); 

router.get("/signup",shoForm);
// router.post("/signup",formApply);
router.post("/signup",upload.single('image'),formApply.insert);

// -------------------------------------------------------------admin------------------------------------------------------
router.get("/admin/product/form",showFormOfProduct);
router.post("/admin/product/form",upload.single('product_image'),formProduct.insert);
router.get("/admin/category/insert/",showCatForm);
router.post("/admin/category/insert/",catForm);
router.get("/admin/brand/form/",showBrandForm);
router.post("/admin/brand/form",formBrand);
router.get("/admin/product/show",showProduct);

module.exports = router;