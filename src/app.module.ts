import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    CustomerModule, ProductModule, OrderModule,
  ],
})
export class AppModule {}
