import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateNewOrderDto {

    @IsNotEmpty()
    @IsInt()
    customerId: number; 

    @IsNotEmpty()
    productId: number;

    @IsNotEmpty()
    prouctAmount: number;

}

export class ProductDetailsDto {
    @IsNotEmpty()
    productId: number;

    @IsNotEmpty()
    prouctAmount: number;

}

export class UpdateOrderDto {
    @IsNotEmpty()
    orderId: number;
    
    @IsNotEmpty()
    productId: number;

    @IsNotEmpty()
    prouctAmount: number;

}
