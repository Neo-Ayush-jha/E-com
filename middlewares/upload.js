const multer = require('multer')


// image connect ---------------------------------------
const fileStorage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./images")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_"+Date.now() + "_" + file.originalname);
    }
});
const upload = multer({
    storage:fileStorage,
    fileDilter:(req,file,cb)=>{
        console.log(cb,file);
        return false;
        // if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
        //     cb(null, true);
        //     console.log('image is inserted');
        // }else{
        //     cb(null, false);
        //     console.log('image not inserted');
        //     return cb(new Error('Only .png.jpg and .jpeg formate allowed'));
        // }
    }
});
module.exports = upload;