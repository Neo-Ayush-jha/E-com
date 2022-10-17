require('dotenv').config()
var express = require('express');
var app = express();
var ejs = require('ejs');
const path = require('path');
var db = require("./databases/db");
var mongoose = require('mongoose');
var connect = require("./databases/db");
var bodyParser = require('body-parser');
var router = require('./routers/router');
var expressLayouts = require('express-ejs-layouts');
var urlEncoded = bodyParser.urlencoded({extended:false})
app.use(urlEncoded);
// const mongoSessionStore = require("connect-mongo");
var session = require("express-session");
var flash = require("express-flash");

// ------------------
// const mongoose = require('mongoose');
// const {MONGOURI} = require('./key')

// mongoose.connect(MONGOURI);
// mongoose.connection.on("connected",()=>{
//     console.log('connecter with mongoose');
// })
// mongoose.connection.on("error",(err)=>{
//     console.log('not connecter with mongoose',err);
// })

// ------------------
// const MongoStore = mongoSessionStore(session);
// new MongoStore({
//     mongooseConnection:connection
// })
app.use(flash());
app.use(express.json());
app.use(session({
    secret: 'process.env.COOKIE_SECRET',
    resave: true,
    saveUninitialized: false,
    cookie:{maxAge:1000 * 60 * 60 *24}
}));

app.use("/images", express.static(path.join(__dirname, "images")));
const staticPath = path.join(__dirname, './images');
app.use(express.static(staticPath));
app.use(express.static('./images'))

app.use("/",router);
app.set("views", path.join(__dirname, 'views'));
app.set("view engine","ejs")
app.use(expressLayouts);


app.listen(8081);