import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { FindCustomerDto } from './dto/find-customer.dto';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    getAllCustomer(): Promise<Customer[]>;
    getCustomer(findCustomerDto: FindCustomerDto): Promise<Customer>;
    getCustomerbyId(id: number): Promise<Customer>;
    getCustomerByPhone(phone: string): Promise<Customer>;
    getCustomerByEmail(email: string): Promise<Customer>;
    getCustomerByAddress(address: string): Promise<Customer>;
    deleteCustomer(findCustomerDto: FindCustomerDto): Promise<Customer>;
    deleteCutomerById(id: number): Promise<Customer>;
    deleteCutomerByphone(phone: string): Promise<Customer>;
    deleteCutomerByEmail(email: string): Promise<Customer>;
    deleteCutomerByAddress(address: string): Promise<Customer>;
    testBed1(createCustomerDto: CreateCustomerDto): Promise<any>;
    testBed2(createCustomerDto: CreateCustomerDto): Promise<any>;
}
