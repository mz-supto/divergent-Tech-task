"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const customer_repository_1 = require("./customer.repository");
const typeorm_1 = require("@nestjs/typeorm");
let CustomerService = class CustomerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async createCustomer(createCustomerDto) {
        return this.customerRepository.createCustomer(createCustomerDto);
    }
    async getAllCustomers() {
        return await this.customerRepository.find({});
    }
    async findCustomerById(id) {
        const found = await this.customerRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException("Customer with id " + id.toString() + " not found");
        }
        return found;
    }
    async deleteCustomerById(id) {
        return await this.customerRepository.deleteCustomerById(id);
    }
    async findCustomer(findCustomerDto) {
        const { customerId, customerEmail, customerPhone, customerAddress } = findCustomerDto || {};
        if (customerId) {
            return await this.findCustomerById(customerId);
        }
        else if (customerEmail) {
            return await this.customerRepository.findCustomerByEmail(customerEmail);
        }
        else if (customerPhone) {
            return await this.customerRepository.findCustomerByPhone(customerPhone);
        }
        else if (customerAddress) {
            return await this.customerRepository.findCustomerByAddress(customerAddress);
        }
        else {
            throw new Error("You are trying sqli attack");
        }
    }
    async findCustomerByEmail(tempEmail) {
        const found = await this.customerRepository.findCustomerByEmail(tempEmail);
        if (found.length) {
            return found;
        }
        else {
            throw new common_1.NotFoundException("Customer with email " + tempEmail.toString() + " not found");
        }
    }
    async findCustomerByPhone(tempPhone) {
        const found = await this.customerRepository.findCustomerByPhone(tempPhone);
        if (found.length) {
            return found;
        }
        else {
            throw new common_1.NotFoundException("Customer with phone " + tempPhone.toString() + " not found");
        }
    }
    async findCustomerByAddress(tempAddress) {
        const found = await this.customerRepository.findCustomerByAddress(tempAddress);
        if (found.length) {
            return found;
        }
        else {
            throw new common_1.NotFoundException("Customer with adress " + tempAddress.toString() + " not found");
        }
    }
    async deleteCustomer(findCustomerDto) {
        const { customerId, customerEmail, customerPhone, customerAddress } = findCustomerDto || {};
        if (customerId) {
            return await this.deleteCustomerById(customerId);
        }
        else if (customerEmail) {
            return await this.deleteCustomerByEmail(customerEmail);
        }
        else if (customerPhone) {
            return await this.deleteCustomerByPhone(customerPhone);
        }
        else if (customerAddress) {
            return await this.deleteCustomerByAddress(customerAddress);
        }
        else {
            throw new Error("You are trying sqli attack");
        }
    }
    async deleteCustomerByEmail(email) {
        return await this.customerRepository.deleteCustomerByEmail(email);
    }
    async deleteCustomerByPhone(phone) {
        return await this.customerRepository.deleteCustomerByPhone(phone);
    }
    async deleteCustomerByAddress(address) {
        return await this.customerRepository.deleteCustomerByAddress(address);
    }
    async customerTestBed(createCustomerDto) {
        return this.customerRepository.testBed(createCustomerDto);
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_repository_1.CustomerRepository)),
    __metadata("design:paramtypes", [customer_repository_1.CustomerRepository])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map