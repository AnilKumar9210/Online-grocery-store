import mongoose from "mongoose";

const categorySchema = new mongoose.Schema ({
    categoryName: {
        type:String,
        required:true,
        unique:true
    },
    items:{
        type:[Schema.Types.ObjectId],
        ref:"product",
        default:[]
    }
})

export default mongoose.model ("category",categorySchema);