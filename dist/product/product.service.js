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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_repository_1 = require("./product.repository");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async createProduct(createProductDto) {
        return await this.productRepository.createProduct(createProductDto);
    }
    async getAllProducts() {
        return await this.productRepository.find({});
    }
    async findProductById(id) {
        const found = await this.productRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException("Product with id " + id.toString() + " not found");
        }
        return found;
    }
    async deleteProductById(id) {
        return await this.productRepository.deleteProductById(id);
    }
    async updateInVentoryByProductId(id, addAmmount) {
        const found = await this.productRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException("Product with id " + id.toString() + " not found");
        }
        found.productRemainingCount = found.productRemainingCount + addAmmount;
        await found.save();
        return found;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map