import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from 'src/models/car.model';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carService.getAll();
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<Car> {
    return this.carService.getById(id);
  }

  @Post()
  async createUser(@Body() car: Car): Promise<Car> {
    return this.carService.create(car);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() car: Car): Promise<any> {
    return this.carService.update(id, car);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    return this.carService.delete(id);
  }
}
