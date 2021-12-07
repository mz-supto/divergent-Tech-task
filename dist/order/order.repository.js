"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const order_entity_1 = require("./order.entity");
let OrderRepository = class OrderRepository extends typeorm_1.Repository {
    async createNewOrder(createNewOrderDto) {
        const { customerId, productId, prouctAmount } = createNewOrderDto;
        const tempCustomerId = customerId;
        const order = new order_entity_1.Order();
        order.customerID = tempCustomerId;
        const productDetailsDto = { productId, prouctAmount };
        order.productId = productId;
        order.orderDate = new Date();
        await order.save();
        return order;
    }
    async findOrderById(tempId) {
        const found = await this.findOne(tempId);
        if (!found) {
            throw new common_1.NotFoundException("Order with id " + tempId.toString() + " not found");
        }
        return found;
    }
    async findOrdersOfCustomer(tempCustomerId) {
        const found = await this.find({ customerID: tempCustomerId });
        if (!found) {
            throw new common_1.NotFoundException("Order with Customer id " + tempCustomerId.toString() + " not found");
        }
        return found;
    }
    async getAllOrders() {
        return await this.find({});
    }
};
OrderRepository = __decorate([
    (0, typeorm_1.EntityRepository)(order_entity_1.Order)
], OrderRepository);
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map