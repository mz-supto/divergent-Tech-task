"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const exceptions_1 = require("@nestjs/common/exceptions");
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer.entity");
const common_1 = require("@nestjs/common");
let CustomerRepository = class CustomerRepository extends typeorm_1.Repository {
    async createCustomer(createCustomerDto) {
        const { customerEmail, customerPhone, customerAddress } = createCustomerDto;
        const tempPhone = customerPhone;
        const isDuplicatePhone = await this.find({ customerPhone: tempPhone });
        const tempEmail = customerEmail;
        const isDuplicateEmail = await this.find({ customerEmail: tempEmail });
        if (isDuplicateEmail.length) {
            throw new exceptions_1.NotAcceptableException("Customer with email '" + tempEmail.toString() + "' already exists");
        }
        else if (isDuplicatePhone.length) {
            throw new exceptions_1.NotAcceptableException("Customer with Phone '" + tempPhone.toString() + "' already exists");
        }
        else {
            const customer = new customer_entity_1.Customer();
            customer.customerEmail = customerEmail;
            customer.customerPhone = customerPhone;
            customer.customerAddress = customerAddress;
            await customer.save();
            return customer;
        }
    }
    async findCustomerById(id) {
        const found = await this.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException("Customer with id " + id.toString() + " not found");
        }
        return found;
    }
    async findCustomerByEmail(tempEmail) {
        return await this.find({ customerEmail: tempEmail });
    }
    async findCustomerByPhone(tempPhone) {
        return await this.find({ customerPhone: tempPhone });
    }
    async findCustomerByAddress(tempAddress) {
        return await this.find({ customerEmail: tempAddress });
    }
    async deleteCustomerById(tempId) {
        const found = await this.findCustomerById(tempId);
        if (!found) {
            throw new common_1.NotFoundException("Customer with id " + tempId.toString() + " not found");
        }
        else {
            await this.remove(found);
            return found;
        }
    }
    async deleteCustomerByPhone(tempPhone) {
        const found = await this.find({ customerPhone: tempPhone });
        if (found.length) {
            await this.remove(found);
            return found;
        }
        else {
            throw new common_1.NotFoundException("Customer with Phone " + tempPhone.toString() + " not found");
        }
    }
    async deleteCustomerByEmail(tempEmail) {
        const found = await this.find({ customerEmail: tempEmail });
        if (found.length) {
            await this.remove(found);
            return found;
        }
        else {
            throw new common_1.NotFoundException("Customer with Email " + tempEmail.toString() + " not found");
        }
    }
    async deleteCustomerByAddress(tempAddress) {
        const found = await this.find({ customerAddress: tempAddress });
        if (found.length) {
            await this.remove(found);
            return found;
        }
        else {
            throw new common_1.NotFoundException("Customer with Address " + tempAddress.toString() + " not found");
        }
    }
    async testBed(createCustomerDto) {
        const { customerEmail, customerPhone, customerAddress } = createCustomerDto;
        const tempPhone = customerPhone;
        const isDuplicatePhone = await this.find({ customerPhone: tempPhone });
        const tempEmail = customerEmail;
        const isDuplicateEmail = await this.find({ customerEmail: tempEmail });
        console.log(isDuplicatePhone);
        console.log('d mail');
        console.log(isDuplicateEmail);
        console.log('d phone');
        console.log(isDuplicatePhone);
        return;
    }
};
CustomerRepository = __decorate([
    (0, typeorm_1.EntityRepository)(customer_entity_1.Customer)
], CustomerRepository);
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=customer.repository.js.map