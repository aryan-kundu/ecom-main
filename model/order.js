
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId:{type:String , required : true },
    product :[{
        productId:{type:String , required :true},
        quantity:{type:Number , default:1}
    }],
    address:{type:String , required:true},
    amount:{type:Number , required:true},
    status:{type:String , required:true , default:"pending"}
},{timestamps:true})
mongoose.models= {}
export default mongoose.model("order" ,OrderSchema ) 