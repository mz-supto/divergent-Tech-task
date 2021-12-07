import { Entity, EntityRepository, Repository } from "typeorm";
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { NotAcceptableException } from "@nestjs/common/exceptions";
import { NotFoundException } from '@nestjs/common';
import { length } from "class-validator";



@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {

        const { productName, productManufacturer, productRemainingCount } = createProductDto;
        const tempName = productName;
        const tempManufacturer = productManufacturer;
        const tempCount = productRemainingCount;
        const isNameDuplicate = await this.find( { productName: tempName } );
        const isManufacturerDuplicate = await this.find( { productManufacturer: tempManufacturer } );
        
        if ( isNameDuplicate.length && isManufacturerDuplicate.length ) {
            throw new NotAcceptableException("Product already exists");
        } else{ 
            const product = new Product();
            product.productName = tempName;
            product.productManufacturer = tempManufacturer;
            product.productRemainingCount = tempCount;
            await product.save();
            return product;  
        }
    }

    async findProductById(id: number): Promise<Product> {
        const found = await this.findOne(id);
        if( !found ) {
            throw new NotFoundException("Product with id "+ id.toString() + " does not exist");
        }
        return found
    }

    async findProductByManufacturer(tempManufacturer: string): Promise<any> {
        return await this.find( { productManufacturer: tempManufacturer } );
    }
    
    async findProductByName(tempName: string): Promise<any> {
        return await this.find( { productName: tempName } );
    }
    
    async deleteProductById(tempId: number): Promise<Product> {
        const found = await this.findOne(tempId);
        if(!found) {
            throw new NotFoundException("Product with id " + tempId.toString() + " not found");
        } else {
            await this.remove(found);
            return found;
        }  
    }

    async buyProductWithId(tempId: number): Promise<Product> {
        const found = await this.findOne(tempId);
        if( !found ) {
            throw new NotFoundException("Product with id "+ tempId.toString() + " does not exist");
        }
        found.productRemainingCount = found.productRemainingCount -1 ;
        await found.save();
        return found;
    }

    async deleteProductByName(tempName: string): Promise<Product> {
        const found = await this.findProductByName(tempName);
        if(!found) {
            throw new NotFoundException("Product with id " + tempName.toString() + " not found");
        } else {
            await this.remove(found);
            return found;
        }

    }

    
}
