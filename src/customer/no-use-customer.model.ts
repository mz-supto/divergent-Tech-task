import {IsInt, IsNotEmpty, IsString} from 'class-validator'

export class Customer {
    customerId: number;
    customerEmail: string;    
    customerPhone: string;    
    customerAddress: string;
}