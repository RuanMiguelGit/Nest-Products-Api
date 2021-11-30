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

        createProduct(){

        }

        // updateProduct(){

        // }

        // deleteProduct(){

        // }
    




}
