import { Repository } from "typeorm";
import { Customer } from "./customer.entity";
import { CreateCustomerDto } from "./dto/create-customer.dto";
export declare class CustomerRepository extends Repository<Customer> {
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    findCustomerById(id: number): Promise<Customer>;
    findCustomerByEmail(tempEmail: string): Promise<any>;
    findCustomerByPhone(tempPhone: string): Promise<any>;
    findCustomerByAddress(tempAddress: string): Promise<any>;
    deleteCustomerById(tempId: number): Promise<Customer>;
    deleteCustomerByPhone(tempPhone: string): Promise<any>;
    deleteCustomerByEmail(tempEmail: string): Promise<any>;
    deleteCustomerByAddress(tempAddress: string): Promise<any>;
    testBed(createCustomerDto: CreateCustomerDto): Promise<any>;
}
