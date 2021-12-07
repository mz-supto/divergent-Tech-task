import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ProductDetailsDto } from "./dto/create-order.dto";

@Entity()
export class Order extends BaseEntity {

    @PrimaryGeneratedColumn()
    orderId: number;

    @Column()
    customerID: number; //foreign key

    @Column()
    productId: number;

    @Column()
    orderDate: Date;
    



}