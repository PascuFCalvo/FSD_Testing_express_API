import { Request, Response } from "express";

const getStatus = (req: Request, res: Response) => {
  console.log("Hola moreno")
  const status = { Status: "Running" };
  return res.send(status);
};

export { getStatus }