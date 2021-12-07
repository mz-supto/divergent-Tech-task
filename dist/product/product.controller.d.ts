import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductCountWithIdDto } from './dto/product-change.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getAllCustomer(): Promise<Product[]>;
    getCustomerbyId(id: number): Promise<Product>;
    deleteCutomerById(id: number): Promise<Product>;
    updateProductCountWithId(updateProductCountWithIdDto: UpdateProductCountWithIdDto): Promise<Product>;
}
