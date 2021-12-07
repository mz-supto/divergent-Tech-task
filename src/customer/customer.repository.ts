import { NotAcceptableException } from "@nestjs/common/exceptions";
import { Entity, EntityRepository, Repository } from "typeorm";
import { Customer } from "./customer.entity";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { NotFoundException } from '@nestjs/common';
import { length } from "class-validator";

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {

    async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        
        const { customerEmail, customerPhone, customerAddress } = createCustomerDto;
        const tempPhone = customerPhone;
        const isDuplicatePhone = await this.find( { customerPhone: tempPhone } );
        const tempEmail = customerEmail;
        const isDuplicateEmail = await this.find( { customerEmail: tempEmail } );
        
        if ( isDuplicateEmail.length ) {

            throw new NotAcceptableException("Customer with email '" + tempEmail.toString() + "' already exists");

        } else if ( isDuplicatePhone.length ) {

            throw new NotAcceptableException("Customer with Phone '" + tempPhone.toString() + "' already exists");

        } else {
            const customer = new Customer();
            
            customer.customerEmail = customerEmail;
            customer.customerPhone = customerPhone;
            customer.customerAddress = customerAddress;
            await customer.save();

            return customer;
        }
    }
    
    async findCustomerById(id: number): Promise<Customer> {
        const found = await this.findOne(id);
        
        if(!found) {
            throw new NotFoundException("Customer with id " + id.toString() + " not found");
        }
        return found;
    }

    async findCustomerByEmail(tempEmail: string): Promise<any> {
        return await this.find( { customerEmail: tempEmail } );
    }

    async findCustomerByPhone(tempPhone: string): Promise<any> {
        return await this.find( { customerPhone: tempPhone } );
    }

    async findCustomerByAddress(tempAddress: string): Promise<any> {
        return await this.find( { customerEmail: tempAddress } );
    }

    async deleteCustomerById(tempId: number): Promise<Customer> {
        const found = await this.findCustomerById(tempId);
        if(!found) {
            throw new NotFoundException("Customer with id " + tempId.toString() + " not found");
        } else {
            await this.remove(found);
            return found;
        }  
    }



    
    async deleteCustomerByPhone(tempPhone: string): Promise<any> {
        const found = await this.find( { customerPhone: tempPhone } );
        if(found.length) {
            await this.remove(found);
            return found;
            
        } else {
            throw new NotFoundException("Customer with Phone " + tempPhone.toString() + " not found");
        }
    }

    async deleteCustomerByEmail(tempEmail: string): Promise<any> {
        const found = await this.find( { customerEmail: tempEmail } );
        if(found.length) {
            await this.remove(found);
            return found;
            
        } else {
            throw new NotFoundException("Customer with Email " + tempEmail.toString() + " not found");
        }
    }

    async deleteCustomerByAddress(tempAddress: string): Promise<any> {
        const found = await this.find( { customerAddress: tempAddress } );
        if(found.length) {
            await this.remove(found);
            return found;
            
        } else {
            throw new NotFoundException("Customer with Address " + tempAddress.toString() + " not found");
        }
    }





    async testBed(createCustomerDto: CreateCustomerDto): Promise<any> {

        
        // const { customerEmail, customerPhone, customerAddress } = createCustomerDto;
        // const tempPhone = customerPhone;
        // const tempEmail = customerEmail;

        // const checkFlag = await this.checkIfEmailExists(tempEmail);

        // console.log(checkFlag);
        
        

        const { customerEmail, customerPhone, customerAddress } = createCustomerDto;
        const tempPhone = customerPhone;
        const isDuplicatePhone = await this.find( { customerPhone: tempPhone } );
        const tempEmail = customerEmail;
        const isDuplicateEmail = await this.find( { customerEmail: tempEmail } );

        console.log(isDuplicatePhone);
        console.log('d mail');
        console.log(isDuplicateEmail);
        
        console.log('d phone');
        console.log(isDuplicatePhone);
        
        

        
        return;
    }   
}