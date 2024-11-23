import { Request, Response } from "express";
import { carValidationSchema } from "./car.validation";

const createCar = async (req: Request, res: Response) => {
  try {
    const { car: carData } = req.body;
    const result = await carValidationSchema.createTour(carData);

    res.send({
      success: true,
      message: "Car created succesfully",
      result: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const getAllCars = async (req: Request, res: Response) => {
    try {
        const result = await 
    }
}