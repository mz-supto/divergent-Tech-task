import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CreateCustomerDto,  } from './dto/create-customer.dto';
import { FindCustomerDto } from './dto/find-customer.dto';
import { CustomerRepository } from './customer.repository';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class CustomerService {
    
    constructor( 
        @InjectRepository(CustomerRepository)
        private customerRepository: CustomerRepository
    ) {

    }
        
    async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return this.customerRepository.createCustomer(createCustomerDto);
    }
    
    async getAllCustomers(): Promise<Customer[]> {
        return await this.customerRepository.find( {  } );
    }
    
    async findCustomerById(id: number): Promise<Customer> {
        const found = await this.customerRepository.findOne(id);
        
        if(!found) {
            throw new NotFoundException("Customer with id " + id.toString() + " not found");
        }
        return found;
    }

    async deleteCustomerById(id: number): Promise<Customer> {
        return await this.customerRepository.deleteCustomerById(id);
    }
    
    async findCustomer(findCustomerDto: FindCustomerDto): Promise<Customer> {
        const { customerId, customerEmail, customerPhone, customerAddress } = findCustomerDto || {};

        if(customerId) {
            return await this.findCustomerById(customerId);
        } else if (customerEmail) {
            return await this.customerRepository.findCustomerByEmail(customerEmail);
        } else if(customerPhone) {
            return await this.customerRepository.findCustomerByPhone(customerPhone);
        } else if (customerAddress) {
            return await this.customerRepository.findCustomerByAddress(customerAddress);
        } else {
            throw new Error("You are trying sqli attack");      
        }
    }
    
    async findCustomerByEmail(tempEmail: string): Promise<any> {
        const found = await this.customerRepository.findCustomerByEmail(tempEmail);
        if( found.length ) {
            return found;
        } else {
            throw new NotFoundException("Customer with email " + tempEmail.toString() + " not found");
        }
    }
    
    async findCustomerByPhone(tempPhone: string): Promise<any> {
        const found = await this.customerRepository.findCustomerByPhone(tempPhone);
        if( found.length ) {
            return found;
        } else {
            throw new NotFoundException("Customer with phone " + tempPhone.toString() + " not found");
        }
    }  

    async findCustomerByAddress(tempAddress: string): Promise<any> {
        const found = await this.customerRepository.findCustomerByAddress(tempAddress);
        if( found.length ) {
            return found;
        } else {
            throw new NotFoundException("Customer with adress " + tempAddress.toString() + " not found");
        }
    }

    async deleteCustomer(findCustomerDto: FindCustomerDto): Promise<Customer> {
        const { customerId, customerEmail, customerPhone, customerAddress } = findCustomerDto || {};

        if(customerId) {
            return await this.deleteCustomerById(customerId);
        } else if (customerEmail) {
            return await this.deleteCustomerByEmail(customerEmail);
        } else if(customerPhone) {
            return await this.deleteCustomerByPhone(customerPhone);
        } else if (customerAddress) {
            return await this.deleteCustomerByAddress(customerAddress);
        } else {
            throw new Error("You are trying sqli attack");      
        }
    }

    async deleteCustomerByEmail(email: string): Promise<Customer> {
        return await this.customerRepository.deleteCustomerByEmail(email);
    }
    
    async deleteCustomerByPhone(phone: string): Promise<Customer> {
        return await this.customerRepository.deleteCustomerByPhone(phone);
    }
    
    async deleteCustomerByAddress(address: string): Promise<Customer> {
        return await this.customerRepository.deleteCustomerByAddress(address);
    }

    async customerTestBed(createCustomerDto: CreateCustomerDto): Promise<any> {
        return this.customerRepository.testBed(createCustomerDto);
    }
}


    
    
    // findCustomerById(id: number): Customer {
    //     const found =  this.customers.find(
    //         customer => customer.customerId == id
    //     );
        
    //     if(!found) {
    //         throw new NotFoundException("Customer with id " + id.toString() + " not found");
    //     }

    //     return found;
    // }
    

    // private customers: Customer[] = [];

    
    // createCustomer(createCustomerDto: CreateCustomerDto): Customer {
    //     const customer = new Customer();
    //     const { customerEmail, customerPhone, customerAddress } = createCustomerDto;

        
    //     customer.customerId = ( Math.floor( ( Math.random()*10000 ) ) );
    //     customer.customerEmail = customerEmail;
    //     customer.customerPhone = customerPhone;
    //     customer.customerAddress = customerAddress;

    //     this.customers.push(customer);

    //     return customer;

    // }

    // getAllCustomers(): Customer[] {
    //     return this.customers;
    // }

    // findCustomerById(id: number): Customer {
    //     const found =  this.customers.find(
    //         customer => customer.customerId == id
    //     );
        
    //     if(!found) {
    //         throw new NotFoundException("Customer with id " + id.toString() + " not found");
    //     }

    //     return found;
    // }

    // findCustomerByPhone(phone: string): Customer {
    //     const found = this.customers.find(
    //         customer => customer.customerPhone === phone
    //     );

    //     if(!found) {
    //         throw new NotFoundException("Customer with phone " + phone.toString() + " not found");
    //     }

    //     return found;

    // }

    // findCustomerByEmail(email: string): Customer {
    //     const found = this.customers.find(
    //         customer => customer.customerEmail === email
    //     );

    //     if(!found) {
    //         throw new NotFoundException("Customer with email " + email.toString() + " not found");
    //     }

    //     return found;

    // }

    // findCustomerByAddress(address: string): Customer {
    //     const found = this.customers.find(
    //         customer => customer.customerAddress.includes(address)
    //     );

    //     if(!found) {
    //         throw new NotFoundException("Customer with address " + address.toString() + " not found");
    //     }

    //     return found;

    // }

    // deleteCustomerById(id: number): Customer {
    //     const found = this.findCustomerById(id);
    //     if(!found) {
    //         throw new NotFoundException("Customer with id " + id.toString() + " not found");
    //     }
    //     const indexOfFound = this.customers.indexOf(found);
    //     this.customers.splice(indexOfFound, 1);
    //     return found;
    // }

    // deleteCustomerByEmail(email: string): Customer {
    //     const found = this.findCustomerByEmail(email);
    //     if(!found) {
    //         throw new NotFoundException("Customer with email " + email.toString() + " not found");
    //     }
    //     const indexOfFound = this.customers.indexOf(found);
    //     this.customers.splice(indexOfFound, 1);
    //     return found;
    // }

    // deleteCustomerByPhone(phone: string): Customer {
    //     const found = this.findCustomerByPhone(phone);
    //     if(!found) {
    //         throw new NotFoundException("Customer with phone " + phone.toString() + " not found");
    //     }
    //     const indexOfFound = this.customers.indexOf(found);
    //     this.customers.splice(indexOfFound, 1);
    //     return found;
    // }


    // deleteCustomerByEmail(email: string): Customer {
    //     const found = this.findCustomerByEmail(email);
    //     if(!found) {
    //         throw new NotFoundException("Customer with email " + email.toString() + " not found");
    //     }
    //     const indexOfFound = this.customers.indexOf(found);
    //     this.customers.splice(indexOfFound, 1);
    //     return found;
    // }

    // deleteCustomerByPhone(phone: string): Customer {
    //     const found = this.findCustomerByPhone(phone);
    //     if(!found) {
    //         throw new NotFoundException("Customer with phone " + phone.toString() + " not found");
    //     }
    //     const indexOfFound = this.customers.indexOf(found);
    //     this.customers.splice(indexOfFound, 1);
    //     return found;
    // }