import { Repository } from "typeorm";
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductRepository extends Repository<Product> {
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    findProductById(id: number): Promise<Product>;
    findProductByManufacturer(tempManufacturer: string): Promise<any>;
    findProductByName(tempName: string): Promise<any>;
    deleteProductById(tempId: number): Promise<Product>;
    buyProductWithId(tempId: number): Promise<Product>;
    deleteProductByName(tempName: string): Promise<Product>;
}
