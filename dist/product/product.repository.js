"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const exceptions_1 = require("@nestjs/common/exceptions");
const common_1 = require("@nestjs/common");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    async createProduct(createProductDto) {
        const { productName, productManufacturer, productRemainingCount } = createProductDto;
        const tempName = productName;
        const tempManufacturer = productManufacturer;
        const tempCount = productRemainingCount;
        const isNameDuplicate = await this.find({ productName: tempName });
        const isManufacturerDuplicate = await this.find({ productManufacturer: tempManufacturer });
        if (isNameDuplicate.length && isManufacturerDuplicate.length) {
            throw new exceptions_1.NotAcceptableException("Product already exists");
        }
        else {
            const product = new product_entity_1.Product();
            product.productName = tempName;
            product.productManufacturer = tempManufacturer;
            product.productRemainingCount = tempCount;
            await product.save();
            return product;
        }
    }
    async findProductById(id) {
        const found = await this.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException("Product with id " + id.toString() + " does not exist");
        }
        return found;
    }
    async findProductByManufacturer(tempManufacturer) {
        return await this.find({ productManufacturer: tempManufacturer });
    }
    async findProductByName(tempName) {
        return await this.find({ productName: tempName });
    }
    async deleteProductById(tempId) {
        const found = await this.findOne(tempId);
        if (!found) {
            throw new common_1.NotFoundException("Product with id " + tempId.toString() + " not found");
        }
        else {
            await this.remove(found);
            return found;
        }
    }
    async buyProductWithId(tempId) {
        const found = await this.findOne(tempId);
        if (!found) {
            throw new common_1.NotFoundException("Product with id " + tempId.toString() + " does not exist");
        }
        found.productRemainingCount = found.productRemainingCount - 1;
        await found.save();
        return found;
    }
    async deleteProductByName(tempName) {
        const found = await this.findProductByName(tempName);
        if (!found) {
            throw new common_1.NotFoundException("Product with id " + tempName.toString() + " not found");
        }
        else {
            await this.remove(found);
            return found;
        }
    }
};
ProductRepository = __decorate([
    (0, typeorm_1.EntityRepository)(product_entity_1.Product)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map