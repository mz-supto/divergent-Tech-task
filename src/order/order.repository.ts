import { NotAcceptableException } from "@nestjs/common/exceptions";
import { Entity, EntityRepository, Repository } from "typeorm";
import { CreateNewOrderDto, ProductDetailsDto, UpdateOrderDto } from "./dto/create-order.dto";
import { NotFoundException } from '@nestjs/common';
import { length } from "class-validator";
import { Order } from './order.entity';


@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
    async createNewOrder(createNewOrderDto: CreateNewOrderDto): Promise<Order> {
        const { customerId, productId, prouctAmount } = createNewOrderDto;
        const tempCustomerId = customerId;
        const order =new Order();
        order.customerID = tempCustomerId;
        const productDetailsDto: ProductDetailsDto = { productId, prouctAmount };
        order.productId = productId;
        order.orderDate = new Date();

        await order.save()
        return order;
    }

    async findOrderById(tempId: number): Promise<Order> {
        const found = await this.findOne(tempId);
        
        if(!found) {
            throw new NotFoundException("Order with id " + tempId.toString() + " not found");
        }
        return found;
    } 
    
    async findOrdersOfCustomer(tempCustomerId: number): Promise<any> {
        const found = await this.find( { customerID: tempCustomerId } );
        if(!found) {
            throw new NotFoundException("Order with Customer id " + tempCustomerId.toString() + " not found");
        }
        return found;
    }

    // async updateCustomerOrder(updateOrderDto: UpdateOrderDto): Promise<void> {
    //     const { orderId, productId, prouctAmount } = updateOrderDto;
    //     const productDetailsDto: ProductDetailsDto = { productId, prouctAmount };
    //     const found = await this.findOne(orderId);
    //     found.products.push(productDetailsDto);
    //     await found.save();

    // }

    
    async getAllOrders(): Promise<Order[]> {
        return await this.find( {  } );
    }


}