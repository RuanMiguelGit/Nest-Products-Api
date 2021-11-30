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
        const data = await this.productService.getProduct(id)
        if(!data) return res.status(HttpStatus.NOT_FOUND).json({
            message:"Product Not Found"
        })
        return res.status(HttpStatus.OK).json({
            data
        }) 
    }

    @Put(':id')
    async updateProduct(@Res() res, @Param('id') id, @Body() createProductDTO: CreateProductDTO){
        const data = this.productService.updateProduct(id, createProductDTO )
        if(!data) res.status(HttpStatus.NOT_FOUND).json({
            message:'Product Not found'
        })
        return res.status(HttpStatus.OK).json({data})
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id, @Res() res ){
        const deleted = await this.productService.deleteProduct(id)
        if(!deleted)  throw new NotFoundException("Product Already Deleted");
        return res.status(HttpStatus.OK).json({
            message:'Product deleted',
            deleted
        })
    }
}
