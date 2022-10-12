var userModel = require('../models/user');
function userAuthorizedCheck(req,res,next){
     userModel.findById(req.session.user_id).exec(function(error, user){
        if(error){
            return(error);
        }
        else{
            if(user){
                res.redirect("/cart")
            }
            else{
                return next();
            }
        }
    })
}
function userAuthorized(req,res,next){
     userModel.findById(req.session.user_id).exec(function(error, user){
        if(error){
            return(error);
        }
        else{
            if(user === null){
                res.redirect("/user/login")
            }
            else{
                return next();
            }
        }
    })
}

module.exports = {userAuthorized, userAuthorizedCheck};