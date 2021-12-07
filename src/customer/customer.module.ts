import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepository } from './customer.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature( [ CustomerRepository ] ),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
