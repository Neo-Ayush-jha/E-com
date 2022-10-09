var express = require('express');
var app = express();
var router = require('./routers/router');
var db = require("./databases/db");
var connect = db("mongodb://localhost/ecom");
var bodyParser = require('body-parser');
var ejs = require('ejs');
const path = require('path');
var expressLayouts = require('express-ejs-layouts');
var urlEncoded = bodyParser.urlencoded({extended:false})
app.use(urlEncoded);

app.use("/images", express.static(path.join(__dirname, "images")));
const staticPath = path.join(__dirname, './images');
app.use(express.static(staticPath));
app.use(express.static('./images'))

app.use("/",router);
app.set("views", path.join(__dirname, 'views'));
app.set("view engine","ejs")
app.use(expressLayouts);

app.listen(8081);