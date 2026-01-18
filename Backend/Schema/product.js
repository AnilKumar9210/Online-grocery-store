import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    details : {
        type:String,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageUrl : {
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    reviews : {
        rating:{
            type:Number,
            default:0,
        },
        comment:{
            type:String,
            default:"",
        }
    }
})

export default mongoose.model ("product",productSchema);