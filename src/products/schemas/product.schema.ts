import { Schema } from "mongoose"

export const productSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    description:String,
    imageUrl:String,
    price:{
        type:Number,
        required:true
    },
    createAt:{
        type: Date,
        default: Date.now()
    }
})