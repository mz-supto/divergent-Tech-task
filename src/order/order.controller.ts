import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateNewOrderDto, UpdateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor (private orderService: OrderService) {  }

    @Post() //works
    @UsePipes(ValidationPipe)
    createNewOrder( 
        @Body() createNewOrderDto: CreateNewOrderDto
     ): Promise<Order> {
        return this.orderService.createNewOrder(createNewOrderDto);  
    }

    // @Post('/update') //works
    // @UsePipes(ValidationPipe)
    // updateExistingOrder( 
    //     @Body() updateOrderDto: UpdateOrderDto
    //  ): Promise<any> {
    //     return  this.orderService.updateCustomerOrder(updateOrderDto) ;
    // }

    @Get('/find/id/:id') //works
    @UsePipes(ValidationPipe)
    getOrderById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<Order> {
        return this.orderService.findOrderById(id);
    }

    @Get('/find/customer/:customerId') //works
    @UsePipes(ValidationPipe)
    getCustomerByPhone(
        @Param('customerId') customerId: number
    ): Promise<any> {
        return this.orderService.findOrdersOfCustomer(customerId);
    }

    @Get() //works
    getAllCustomer(): Promise<Order[]> {
        return this.orderService.getAllOrders();
    }

}
