import { Request, Response } from "express";

const getStatus = (req: Request, res: Response) => {
  
  const status = { Status: "Running" };
  return res.json(status);
};

export { getStatus }