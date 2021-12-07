import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, ValidateIf } from "class-validator";

export class FindCustomerDto {
    @ValidateIf(o => o.customerId != undefined)
    @IsInt()
    @IsPositive()
    customerId: number;
    
    @ValidateIf(o => o.customerEmail != undefined)
    @IsEmail() 
    customerEmail: string;
    
    @ValidateIf(o => o.customerPhone != undefined)
    @IsString()
    customerPhone: string;

    @ValidateIf(o => o.customerAddress != undefined)
    @IsString()
    customerAddress: string;
    


}

// customerId, customerEmail, customerPhone, customerAddress