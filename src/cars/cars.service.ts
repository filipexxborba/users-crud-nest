import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from 'src/models/car.model';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Car') private readonly carModel: Model<Car>) {}

  async getAll() {
    return await this.carModel.find().exec();
  }

  async getById(id: string) {
    return await this.carModel.findById(id).exec();
  }

  async create(car: Car) {
    const createdCar = new this.carModel(car);
    return await createdCar.save();
  }

  async update(id: string, car: Car) {
    return await this.carModel.updateOne({ _id: id }, car).exec();
  }

  async delete(id: string) {
    return await this.carModel.deleteOne({ _id: id }).exec();
  }
}
