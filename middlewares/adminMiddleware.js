const AdminModel = require("../models/admin");

function adminAuthorizedCheck(req, res, next) {
    AdminModel.findById(req.session.admin_id).exec(function (error, admin) {
        if (error) {
            return (error);
        }
        else {
            if (admin) {
                res.redirect("/admin/home")
            }
            else {
                return next();
            }
        }
    })
}
function adminAuthorized(req, res, next) {
    AdminModel.findById(req.session.admin_id).exec(function (error, admin) {
        if (error) {
            return (error);
        }
        else {
            if (admin === null) {
                res.redirect("/admin/login")
            }
            else {
                return next();
            }
        }
    })
}

module.exports = { adminAuthorized, adminAuthorizedCheck };