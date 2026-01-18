import mongoose, { Schema } from "mongoose";

const orderSchema = mongoose.Schema ({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    orders:{
        type:[Schema.Types.ObjectId],
        ref:"products"
    },
    status:{
        type:String,
        default:"pending",
    },
    orderDate:{
        type:Date,
        default:Date.now,
    }
})
export default mongoose.model ("order", orderSchema);