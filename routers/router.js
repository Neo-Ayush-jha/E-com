var express = require('express');
var router = express.Router();
const upload = require("../middlewares/upload");
const { shoForm, formApply, Product, singleProduct, checkOut, checkoutForm, userLogin, checkUser, cart } = require('../controllers/userController');
const { showFormOfProduct, showCatForm, showBrandForm, catForm, formBrand, formProduct, showProduct,adminHome, adminLogin, checkAdmin ,InsertAdmin} = require('../controllers/adminController');
const {adminAuthorizedCheck,adminAuthorized} = require('../middlewares/adminMiddleware');
const {userAuthorizedCheck,userAuthorized} = require('../middlewares/userMiddleware');
router.get("/",Product);
// router.get("/checkout",function(req,res){ res.render("checkOut");});
router.get('/checkout/:id',checkOut);
router.post('/checkout',checkoutForm);
router.get('/singleProduct/:id',singleProduct);
// router.get("/admin/register",InsertAdmin); 
router.get('/user/login',userAuthorizedCheck,userLogin);
router.post('/user/login',checkUser);
router.get("/cart/:id",userAuthorized,cart);
router.get("/signup",shoForm);
// router.post("/signup",formApply);
router.post("/signup",upload.single('image'),formApply.insert);

// -------------------------------------------------------------admin------------------------------------------------------
router.get("/admin/login",adminAuthorizedCheck,adminLogin);
router.post('/admin/login',checkAdmin);
router.get("/admin/home",adminAuthorized,adminHome);

router.get("/admin/product/form",showFormOfProduct);
router.post("/admin/product/form",upload.single('product_image'),formProduct.insert);
router.get("/admin/category/insert/",showCatForm);
router.post("/admin/category/insert/",catForm);
router.get("/admin/brand/form/",showBrandForm);
router.post("/admin/brand/form",formBrand);
router.get("/admin/product/show",showProduct);

module.exports = router;