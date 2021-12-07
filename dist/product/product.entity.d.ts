import { BaseEntity } from "typeorm";
export declare class Product extends BaseEntity {
    productId: number;
    productName: string;
    productManufacturer: string;
    productRemainingCount: number;
}
