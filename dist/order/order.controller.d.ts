import { CreateNewOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createNewOrder(createNewOrderDto: CreateNewOrderDto): Promise<Order>;
    getOrderById(id: number): Promise<Order>;
    getCustomerByPhone(customerId: number): Promise<any>;
    getAllCustomer(): Promise<Order[]>;
}
