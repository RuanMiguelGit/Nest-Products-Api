import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Post()
    createPost(@Res() res, @Body() createProductDTO) {
        return res.status(HttpStatus.OK).json({
            message:"received"
        })
    } 

}
