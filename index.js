var express = require('express');
var app = express();
var ejs = require('ejs');
const path = require('path');
var db = require("./databases/db");
var connect = require("./databases/db");
var bodyParser = require('body-parser');
var router = require('./routers/router');
var expressLayouts = require('express-ejs-layouts');
var urlEncoded = bodyParser.urlencoded({extended:false})
app.use(urlEncoded);

var session = require("express-session");
app.use(session({
    secret:"text my session",
    resave:false,
    saveUninitialized:false,
}))


app.use("/images", express.static(path.join(__dirname, "images")));
const staticPath = path.join(__dirname, './images');
app.use(express.static(staticPath));
app.use(express.static('./images'))

app.use("/",router);
app.set("views", path.join(__dirname, 'views'));
app.set("view engine","ejs")
app.use(expressLayouts);


app.listen(8081);