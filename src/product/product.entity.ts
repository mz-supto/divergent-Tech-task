import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    productId: number;

    @Column()
    productName: string;

    @Column()
    productManufacturer: string;

    @Column()
    productRemainingCount: number;

}