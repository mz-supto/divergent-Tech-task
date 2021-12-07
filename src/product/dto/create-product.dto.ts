import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
    
    @IsNotEmpty()
    productName: string;

    @IsNotEmpty()
    productManufacturer: string;

    @IsNotEmpty()
    productRemainingCount: number;


}