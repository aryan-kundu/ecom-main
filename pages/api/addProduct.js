import Product from "@/model/products"; // Ensure the correct path and capitalization
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == "POST"){
        for(let i=0;i<req.body.length;i++){
        let p= new Product({
            title: req.body[i].title,
            slug: req.body[i].slug,
            desc: req.body[i].desc,
            img: req.body[i].img,
            category: req.body[i].category,
            size: req.body[i].size,
            color: req.body[i].color,
            price: req.body[i].price,
            availableQty: req.body[i].availableQty,
        })
        await p.save();
    }
    res.status(200).json({"success":"success"})
    }
    else {
        res.status(500).json({error:"can not add product"})
    }
};

export default connectDb(handler);