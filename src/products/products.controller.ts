import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
@Controller('products')
export class ProductsController {

    @Post()
    createPost(@Res() res, @Body() createProductDTO:CreateProductDTO) {
        return res.status(HttpStatus.OK).json({
            message:"received"
        })
    } 

}
