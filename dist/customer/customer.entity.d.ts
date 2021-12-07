import { BaseEntity } from "typeorm";
export declare class Customer extends BaseEntity {
    customerId: number;
    customerEmail: string;
    customerPhone: string;
    customerAddress: string;
}
