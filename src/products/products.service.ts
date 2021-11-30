import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel("Products") private ProductModel:Model<Products> ){}

        async getProducts():Promise<Products[]>{
            const data = await this.ProductModel.find()
            return data
        }   

        async getProduct(id:string):Promise<Products>{
            const data = await this.ProductModel.findById(id)
            return data

        }

        async createProduct(createProductDTO: CreateProductDTO):Promise<Products>{
            const newProduct =  new this.ProductModel(createProductDTO)
            const create = await  newProduct.save()
            return create
            }

        async updateProduct(id:string, createProductDTO:CreateProductDTO):Promise<Products>{
            const data = await this.ProductModel.findByIdAndUpdate(id, createProductDTO, {new:true})
            return data
        }

        async deleteProduct(id:string):Promise<Products>{
            const data = await this.ProductModel.findByIdAndDelete(id)
            return data
        }
    




}
