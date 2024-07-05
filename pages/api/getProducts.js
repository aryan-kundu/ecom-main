
import Product from "@/model/products"; 
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    let products = await Product.find(); 
    let tshirt={};
    for(let item of products){
        if(item.title in tshirt){
            if(!tshirt[item.title].color.includes(item.color) && item.availableQty>0){
                tshirt[item.title].color.push(item.color)
            }
            if(!tshirt[item.title].size.includes(item.size) && item.availableQty>0){
                tshirt[item.title].size.push(item.size)
            }
        }
        else{
            tshirt[item.title]=JSON.parse(JSON.stringify(item));
            if(item.availableQty>0){
                tshirt[item.title].color=[item.color];
                tshirt[item.title].size=[item.size];
            }
        }
    }
    
    return res.status(200).json({ tshirt }); 
};

export default connectDb(handler);