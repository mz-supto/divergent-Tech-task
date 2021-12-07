import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNewOrderDto, UpdateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
    constructor( 
        @InjectRepository(OrderRepository)
        private orderRepository: OrderRepository
    ) {  }

    async createNewOrder(createNewOrderDto: CreateNewOrderDto): Promise<Order> {
        return await this.orderRepository.createNewOrder(createNewOrderDto);
    }

    async findOrderById(tempId: number): Promise<Order> {
        return await this.orderRepository.findOrderById(tempId);
    } 

    async findOrdersOfCustomer(tempCustomerId: number): Promise<any> {
        return await this.orderRepository.findOrdersOfCustomer(tempCustomerId);
    }

    // async updateCustomerOrder(updateOrderDto: UpdateOrderDto): Promise<void> { 
    //     return await this.orderRepository.updateCustomerOrder(updateOrderDto);
        
    // }
    
    async getAllOrders(): Promise<Order[]> {
        return await this.orderRepository.getAllOrders();
    }

}
