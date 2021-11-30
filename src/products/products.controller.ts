import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService:ProductsService){}

    @Post()
    async createProducts(@Res() res, @Body() createProductDTO:CreateProductDTO) {
        const product = await this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({
            message:'Product Create',
            data:product
        })
    }

    @Get()
        async getProduct(@Res() res) {
            const data = await this.productService.getProducts()
            return res.status(HttpStatus.OK).json({
                data:data
            })          
        
    }

    @Get(':id') 
    
    async getProducts(@Res() res, @Param('id') id) {
        try {
            const data = await this.productService.getProduct(id)
            return res.status(HttpStatus.OK).json({
                data
            }) 
        } catch(error){
            if(error) return res.status(HttpStatus.NOT_FOUND).json({
                message:"Product Not Found"
            })

        }
    }  

    @Put(':id')
    async updateProduct(@Res() res, @Param('id') id, @Body() createProductDTO: CreateProductDTO){
        try{
        const data = this.productService.updateProduct(id, createProductDTO )
            return res.status(HttpStatus.OK).json({data})
         } catch(error) {
            if(error) res.status(HttpStatus.NOT_FOUND).json({
                message:'Product Not found'
            })
         }
     
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id, @Res() res ){
        try {
        const deleted = await this.productService.deleteProduct(id)
        return res.status(HttpStatus.OK).json({
            message:'Product deleted',
            deleted
        })
    } catch(error) {
        if(error)  throw new NotFoundException("Product Already Deleted");
        }
    }
}
