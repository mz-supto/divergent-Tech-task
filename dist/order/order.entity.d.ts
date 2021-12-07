import { BaseEntity } from "typeorm";
export declare class Order extends BaseEntity {
    orderId: number;
    customerID: number;
    productId: number;
    orderDate: Date;
}
