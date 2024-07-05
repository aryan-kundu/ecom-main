
import User from "@/model/user";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if(req.method == "POST"){
        let user = await User.findOne({"email":req.body.email})
        if(user){
            var bytes  = CryptoJS.AES.decrypt(user.password, 'secret123',{expiresIn:'2d'});
            var checkpass = bytes.toString(CryptoJS.enc.Utf8)
            if(req.body.password==checkpass){
                var token = jwt.sign({ "success":"success",email:req.body.email,password:req.body.password }, 'secretjwt')
                res.status(200).json({success:true,token})
            }
            else{
                res.status(200).json({"error":"incorrect password",email:req.body.email,password:req.body.password})
            }
        }
        else{
            res.status(200).json({"error":"no user found",email:req.body.email,password:req.body.password})
        }
    }
    else {
        res.status(500).json({error:"user can not be registered"})
    }
};

export default connectDb(handler);



