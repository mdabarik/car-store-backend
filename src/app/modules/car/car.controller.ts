const createCar = async (req: Request, res: Response) => {
  try {
    const {car: carData} = req.body;
    const zodData = carValidationSchema.parse(carData);
    const result await 
  } catch (error) {}
};
