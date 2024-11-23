import { Types } from "mongoose";

// Car interface
export type Car = {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
};

export type Order = {
  email: string;
  car: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};
