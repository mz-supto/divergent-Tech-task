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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomerDto = void 0;
const class_validator_1 = require("class-validator");
class FindCustomerDto {
}
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.customerId != undefined),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], FindCustomerDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.customerEmail != undefined),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], FindCustomerDto.prototype, "customerEmail", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.customerPhone != undefined),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindCustomerDto.prototype, "customerPhone", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.customerAddress != undefined),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindCustomerDto.prototype, "customerAddress", void 0);
exports.FindCustomerDto = FindCustomerDto;
//# sourceMappingURL=find-customer.dto.js.map