import { CreateNewOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: OrderRepository);
    createNewOrder(createNewOrderDto: CreateNewOrderDto): Promise<Order>;
    findOrderById(tempId: number): Promise<Order>;
    findOrdersOfCustomer(tempCustomerId: number): Promise<any>;
    getAllOrders(): Promise<Order[]>;
}
