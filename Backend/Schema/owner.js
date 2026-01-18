import mongoose, { Schema } from "mongoose";

const ownerSchema = new mongoose.Schema({
    personal_info :{
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    },
    shop_info : {
        shop_name:{
            type:String,
            required:true
        },
        shop_address:{
            type:String,
            required:true
        },
        service_number:{
            type:String,
            required:true
        }
    },
    orders:{
        type:[Schema.Types.ObjectId],
        ref:"order",
        default:[],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

export default mongoose.model ("owner", ownerSchema);