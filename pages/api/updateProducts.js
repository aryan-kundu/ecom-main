
import Product from "@/model/products"; // Ensure the correct path and capitalization
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == "POST"){
        console.log(req.body);
        for(let i=0;i<req.body.length;i++){
        let p= await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
    }
    res.status(200).json({"success":"success"})
    }
    else {
        res.status(500).json({error:"can not update product"})
    }
};

export default connectDb(handler);