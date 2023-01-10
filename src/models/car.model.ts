import { Document } from 'mongoose';

export class Car extends Document {
  name: string;
  plate: string;
}
