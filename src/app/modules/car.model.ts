import { Schema } from "mongoose";
import { Car } from "./car/car.interface";

const carSchema = new Schema<Car>({
  brand: {
    type: String,
    required: [true, ""],
  },
});

/*
brand: string;
model: string;
year: number;
price: number;
category: string;
description: string;
quantity: number;
inStock: boolean;
*/
