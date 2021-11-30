import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from './schemas/product.schema';

@Module({
  imports:[MongooseModule.forFeature([
    { name:"Products", schema:productSchema}

  ])

],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
