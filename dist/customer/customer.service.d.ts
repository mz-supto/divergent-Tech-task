import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { FindCustomerDto } from './dto/find-customer.dto';
import { CustomerRepository } from './customer.repository';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: CustomerRepository);
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    getAllCustomers(): Promise<Customer[]>;
    findCustomerById(id: number): Promise<Customer>;
    deleteCustomerById(id: number): Promise<Customer>;
    findCustomer(findCustomerDto: FindCustomerDto): Promise<Customer>;
    findCustomerByEmail(tempEmail: string): Promise<any>;
    findCustomerByPhone(tempPhone: string): Promise<any>;
    findCustomerByAddress(tempAddress: string): Promise<any>;
    deleteCustomer(findCustomerDto: FindCustomerDto): Promise<Customer>;
    deleteCustomerByEmail(email: string): Promise<Customer>;
    deleteCustomerByPhone(phone: string): Promise<Customer>;
    deleteCustomerByAddress(address: string): Promise<Customer>;
    customerTestBed(createCustomerDto: CreateCustomerDto): Promise<any>;
}
