import Joi from "joi";
import mongoose from "mongoose";

export const carValidationSchema = Joi.object({
  brand: Joi.string().required().trim().messages({
    "string.empty": "Brand is required",
  }),
  model: Joi.string().required().trim().messages({
    "string.empty": "Model is required",
  }),
  year: Joi.number().required(),
  price: Joi.number().positive().required().messages({
    "number.positive": "price must be a positive number",
  }),
  category: Joi.string().required().message("Category is required."),
  description: Joi.string().required().message("Description is required."),
  quantity: Joi.number().min(0).required(),
  inStock: Joi.boolean().required().message("Must be a boolean value."),
});

export const OrderSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email address",
    "string.empty": "Email is required",
  }),
  car: Joi.string()
    .custom((value, helpers) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.error("any.invalid", { message: "Invalid car ID" });
      }
      return value;
    })
    .required(),
  quantity: Joi.number().required(),
  totalPrice: Joi.number().required(),
});
