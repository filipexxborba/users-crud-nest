import mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    required: true,
  },
});
