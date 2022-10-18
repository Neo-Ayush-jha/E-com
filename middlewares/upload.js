const multer = require('multer')
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
const upload = multer({
    storage: fileStorage,
    fileDilter: (req, file, cb) => {
        console.log(cb, file);
        return false;
    }
});
module.exports = upload;