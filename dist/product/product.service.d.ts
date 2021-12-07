import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    findProductById(id: number): Promise<Product>;
    deleteProductById(id: number): Promise<Product>;
    updateInVentoryByProductId(id: number, addAmmount: number): Promise<Product>;
}
