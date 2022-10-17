var express = require('express');
var router = express.Router();
const upload = require("../middlewares/upload");
const {userAuthorizedCheck,userAuthorized} = require('../middlewares/userMiddleware');
const {adminAuthorizedCheck,adminAuthorized} = require('../middlewares/adminMiddleware');
const { shoForm, formApply, Product, singleProduct, checkOut, checkoutForm, userLogin, checkUser, Logout } = require('../controllers/userController');
const { showFormOfProduct, showCatForm, showBrandForm, catForm, formBrand, formProduct, showProduct,adminHome, adminLogin, checkAdmin ,InsertAdmin,cart, addCart, editCart,} = require('../controllers/adminController');

router.post('/logout',Logout);

router.get("/",Product);
// router.get("/checkout",function(req,res){ res.render("checkOut");});
router.get('/checkout/:id',userAuthorized,checkOut);
router.post('/checkout',checkoutForm);

router.get('/singleProduct/:id',singleProduct);
// router.get("/admin/register",InsertAdmin); 
router.get('/user/login',userAuthorizedCheck,userLogin);
router.post('/user/login',checkUser);

// router.get("/cart/add/:id",cart);
router.post("/cart/add/:id",userAuthorized,editCart);
router.get("/cart/add/:id",userAuthorized,addCart);

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