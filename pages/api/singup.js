
import User from "@/model/user";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if(req.method == "POST"){
        const {name ,email} =req.body
        let u= new User({name,email,password:CryptoJS.AES.encrypt(req.body.password, 'secret123').toString()})
        await u.save();
        res.status(200).json({"success":"success"})
    }
    else {
        res.status(500).json({error:"user can not be registered"})
    }
};

export default connectDb(handler);