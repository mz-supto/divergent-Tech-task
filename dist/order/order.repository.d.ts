import { Repository } from "typeorm";
import { CreateNewOrderDto } from "./dto/create-order.dto";
import { Order } from './order.entity';
export declare class OrderRepository extends Repository<Order> {
    createNewOrder(createNewOrderDto: CreateNewOrderDto): Promise<Order>;
    findOrderById(tempId: number): Promise<Order>;
    findOrdersOfCustomer(tempCustomerId: number): Promise<any>;
    getAllOrders(): Promise<Order[]>;
}
