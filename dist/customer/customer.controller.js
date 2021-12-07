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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const create_customer_dto_1 = require("./dto/create-customer.dto");
const find_customer_dto_1 = require("./dto/find-customer.dto");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    createCustomer(createCustomerDto) {
        return this.customerService.createCustomer(createCustomerDto);
    }
    getAllCustomer() {
        return this.customerService.getAllCustomers();
    }
    getCustomer(findCustomerDto) {
        if (findCustomerDto == null || findCustomerDto == undefined) {
            throw new Error("No search parameter found");
        }
        else if (Object.keys(findCustomerDto).length) {
            return this.customerService.findCustomer(findCustomerDto);
        }
        else
            throw new Error("Unknown error occured");
    }
    getCustomerbyId(id) {
        return this.customerService.findCustomerById(id);
    }
    getCustomerByPhone(phone) {
        return this.customerService.findCustomerByPhone(phone);
    }
    getCustomerByEmail(email) {
        return this.customerService.findCustomerByEmail(email);
    }
    getCustomerByAddress(address) {
        return this.customerService.findCustomerByAddress(address);
    }
    deleteCustomer(findCustomerDto) {
        console.log(findCustomerDto);
        if (findCustomerDto == null || findCustomerDto == undefined) {
            throw new Error("No search parameter found");
        }
        else if (Object.keys(findCustomerDto).length) {
            return this.customerService.deleteCustomer(findCustomerDto);
        }
        else
            throw new Error("Unknown error occured");
    }
    deleteCutomerById(id) {
        return this.customerService.deleteCustomerById(id);
    }
    deleteCutomerByphone(phone) {
        return this.customerService.deleteCustomerByPhone(phone);
    }
    deleteCutomerByEmail(email) {
        return this.customerService.deleteCustomerByEmail(email);
    }
    deleteCutomerByAddress(address) {
        return this.customerService.deleteCustomerByAddress(address);
    }
    testBed1(createCustomerDto) {
        return this.customerService.customerTestBed(createCustomerDto);
    }
    testBed2(createCustomerDto) {
        return this.customerService.customerTestBed(createCustomerDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createCustomer", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getAllCustomer", null);
__decorate([
    (0, common_1.Get)('/find/'),
    __param(0, (0, common_1.Query)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_customer_dto_1.FindCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomer", null);
__decorate([
    (0, common_1.Get)('/find/id/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomerbyId", null);
__decorate([
    (0, common_1.Get)('/find/phone/:phone'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomerByPhone", null);
__decorate([
    (0, common_1.Get)('/find/email/:email'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomerByEmail", null);
__decorate([
    (0, common_1.Get)('/find/address/:address'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomerByAddress", null);
__decorate([
    (0, common_1.Delete)('/delete/'),
    __param(0, (0, common_1.Query)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_customer_dto_1.FindCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCustomer", null);
__decorate([
    (0, common_1.Delete)('/delete/id/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCutomerById", null);
__decorate([
    (0, common_1.Delete)('/delete/phone/:phone'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCutomerByphone", null);
__decorate([
    (0, common_1.Delete)('/delete/email/:email'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCutomerByEmail", null);
__decorate([
    (0, common_1.Delete)('/delete/address/:address'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCutomerByAddress", null);
__decorate([
    (0, common_1.Post)('/test'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "testBed1", null);
__decorate([
    (0, common_1.Get)('/test'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "testBed2", null);
CustomerController = __decorate([
    (0, common_1.Controller)('customer'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map