import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema ({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    cart : {
        type:[Schema.Types.ObjectId],
        ref:"product",
        default:[],
    },
    orders : {
        type:[Schema.Types.ObjectId],
        ref:"order",
        default:[],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

export default mongoose.model ("User", userSchema);