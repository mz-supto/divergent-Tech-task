import { Body, Controller, Get, Param, Post, Delete, UsePipes, ValidationPipe, Query, ParseIntPipe } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { FindCustomerDto } from './dto/find-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor (private customerService: CustomerService) {  }

    @Post() //works
    @UsePipes(ValidationPipe)
    createCustomer( 
        @Body() createCustomerDto: CreateCustomerDto
     ): Promise<Customer> {
        return this.customerService.createCustomer( createCustomerDto );  
    }

    @Get() //works
    getAllCustomer(): Promise<Customer[]> {
        return this.customerService.getAllCustomers();
    }
    
    @Get('/find/') //works
    getCustomer(
        @Query(ValidationPipe) findCustomerDto: FindCustomerDto
        
    ): Promise<Customer> {
        
        if (findCustomerDto == null || findCustomerDto == undefined) {
            throw new Error("No search parameter found");
        } else if( Object.keys(findCustomerDto).length ) {
            return  this.customerService.findCustomer(findCustomerDto);
        } else throw new Error("Unknown error occured");     
    }

    @Get('/find/id/:id') //works
    @UsePipes(ValidationPipe)
    getCustomerbyId(
        @Param('id', ParseIntPipe) id: number
    ): Promise<Customer> {
        return this.customerService.findCustomerById(id);
    }

    
    @Get('/find/phone/:phone') //works
    @UsePipes(ValidationPipe)
    getCustomerByPhone(
        @Param('phone') phone: string
    ): Promise<Customer> {
        return this.customerService.findCustomerByPhone(phone);
    }

    @Get('/find/email/:email') //works
    @UsePipes(ValidationPipe)
    getCustomerByEmail(
        @Param('email') email: string
    ): Promise<Customer> {
        return this.customerService.findCustomerByEmail(email);
    }
    
    @Get('/find/address/:address') //works
    @UsePipes(ValidationPipe)
    getCustomerByAddress(
        @Param('address') address: string
    ): Promise<Customer> {
        return this.customerService.findCustomerByAddress(address);
    }

    @Delete('/delete/') //not working
    deleteCustomer(
        @Query(ValidationPipe) findCustomerDto: FindCustomerDto
        
    ): Promise<Customer> {
        console.log(findCustomerDto);
        
        
        if (findCustomerDto == null || findCustomerDto == undefined) {
            throw new Error("No search parameter found");
        } else if( Object.keys(findCustomerDto).length ) {
            return  this.customerService.deleteCustomer(findCustomerDto);
        } else throw new Error("Unknown error occured");     
    }

    @Delete('/delete/id/:id') //works
    @UsePipes(ValidationPipe)
    deleteCutomerById( 
        @Param('id', ParseIntPipe) id: number
        ): Promise<Customer> {
        return this.customerService.deleteCustomerById(id);
    }

    @Delete('/delete/phone/:phone') //works
    @UsePipes(ValidationPipe)
    deleteCutomerByphone( 
        @Param('phone') phone: string
        ): Promise<Customer> {
        return this.customerService.deleteCustomerByPhone(phone);
    }

    
    @Delete('/delete/email/:email') //works
    @UsePipes(ValidationPipe)
    deleteCutomerByEmail( 
        @Param('email') email: string
        ): Promise<Customer> {
        return this.customerService.deleteCustomerByEmail(email);
    }

    @Delete('/delete/address/:address') //works
    @UsePipes(ValidationPipe)
    deleteCutomerByAddress( 
        @Param('address') address: string
        ): Promise<Customer> {
        return this.customerService.deleteCustomerByAddress(address);
    }

    
    @Post('/test') //works
    @UsePipes(ValidationPipe)
    testBed1( 
        @Body() createCustomerDto: CreateCustomerDto
     ): Promise<any> {
        return this.customerService.customerTestBed(createCustomerDto);  
    }

    @Get('/test')
    @UsePipes(ValidationPipe) //works
    testBed2( 
        @Body() createCustomerDto: CreateCustomerDto
     ): Promise<any> {
        return this.customerService.customerTestBed(createCustomerDto);  
    }

}



    // @Get('/find/')
    // getCustomer(
    //     @Query(ValidationPipe) findCustomerDto: FindCustomerDto
        
    // ): Customer {
    //     console.log();
        
    //     if (findCustomerDto == null || findCustomerDto == undefined) {
    //         throw new Error("No search parameter found");
    //     } else if( Object.keys(findCustomerDto).length ) {
    //         return this.customerService.findCustomer(findCustomerDto);
    //     } else throw new Error("Unknown error occured");
        
    // }
    
    // @Get('/find/phone/:phone')
    // @UsePipes(ValidationPipe)
    // getCustomerByPhone(
    //     @Param('phone') phone: string
    // ): Customer {
    //     return this.customerService.findCustomerByPhone(phone);
    // }

    // @Get('/find/email/:email')
    // @UsePipes(ValidationPipe)
    // getCustomerByEmail(
    //     @Param('email') email: string
    // ): Customer {
    //     return this.customerService.findCustomerByEmail(email);
    // }


    

    // @Delete('/delete/phone/:phone')
    // @UsePipes(ValidationPipe)
    // deleteCutomerByPhone( 
    //     @Param('phone') phone: string
    //     ): Customer {
    //     return this.customerService.deleteCustomerByPhone(phone);
    // }

    // @Delete('/delete/email/:email')
    // @UsePipes(ValidationPipe)
    // deleteCutomerByEmail( 
    //     @Param('email') email: string
    //     ): Customer {
    //     return this.customerService.deleteCustomerByEmail(email);
    // }


    
    
