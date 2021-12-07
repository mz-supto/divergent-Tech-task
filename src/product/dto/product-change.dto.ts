import { IsNotEmpty } from "class-validator";

export class UpdateProductCountWithIdDto {
    
    @IsNotEmpty()
    productId: number;

    @IsNotEmpty()
    addAmount: number;

}