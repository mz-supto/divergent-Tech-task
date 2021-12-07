import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsNotEmpty()
    @IsEmail() 
    customerEmail: string;

    @IsNotEmpty()
    customerPhone: string;

    @IsNotEmpty()
    customerAddress: string;

}
