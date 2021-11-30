import { Document } from "mongoose";

export interface Products extends Document{
    name:string
    description:string
    imageUrl:string
    price:number
    createAt:Date
}