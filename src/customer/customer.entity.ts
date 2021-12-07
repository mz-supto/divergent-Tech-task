import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends BaseEntity {

    @PrimaryGeneratedColumn()
    customerId: number;
    
    @Column({ unique: true })
    customerEmail: string;

    @Column({ unique: true })
    customerPhone: string;

    @Column()
    customerAddress: string;




}