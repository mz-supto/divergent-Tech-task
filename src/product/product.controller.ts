import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductCountWithIdDto } from './dto/product-change.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {  }

    @Post()
    @UsePipes(ValidationPipe)
    createProduct(
        @Body() createProductDto: CreateProductDto
    ): Promise<Product> {
        return  this.productService.createProduct( createProductDto );
    }


    @Get() //works
    getAllCustomer(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }

    @Get('/find/id/:id') //works
    @UsePipes(ValidationPipe)
    getCustomerbyId(
        @Param('id', ParseIntPipe) id: number
    ): Promise<Product> {
        return this.productService.findProductById(id);
    }

    @Delete('/delete/id/:id') //works
    @UsePipes(ValidationPipe)
    deleteCutomerById( 
        @Param('id', ParseIntPipe) id: number
        ): Promise<Product> {
        return this.productService.deleteProductById(id);
    }

    @Post("/update")
    @UsePipes(ValidationPipe)
    updateProductCountWithId(
        @Body() updateProductCountWithIdDto: UpdateProductCountWithIdDto
    ): Promise<Product> {
        const { productId, addAmount } = updateProductCountWithIdDto;
        const tempProductId = productId;
        const tempAddAmount = addAmount;
        return this.productService.updateInVentoryByProductId(tempProductId, tempAddAmount);
    }
    
    

    
    
}
