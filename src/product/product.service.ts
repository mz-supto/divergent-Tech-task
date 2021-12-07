import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository
    ) {
        
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product>{
        return await this.productRepository.createProduct(createProductDto);
    }

    async getAllProducts(): Promise<Product[]> {
        return await this.productRepository.find( {  } );
    }

    async findProductById(id: number): Promise<Product> {
        const found = await this.productRepository.findOne(id);

        if(!found) {
            throw new NotFoundException("Product with id " + id.toString() + " not found");
        }
        return found;
    }

    async deleteProductById(id: number): Promise<Product> {
        return await this.productRepository.deleteProductById(id);
    }
    
    async updateInVentoryByProductId(id: number, addAmmount: number): Promise<Product> {
        const found = await this.productRepository.findOne(id);

        if(!found) {
            throw new NotFoundException("Product with id " + id.toString() + " not found");
        }
        found.productRemainingCount = found.productRemainingCount + addAmmount;
        await found.save();
        return found;
    }

}
