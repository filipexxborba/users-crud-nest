import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster.fvewxwx.mongodb.net/?retryWrites=true&w=majority`,
    ),
    CarsModule,
  ],
  controllers: [UsersController],
  providers: [UserService],
})
export class AppModule {}
