import { Request, Response } from "express";

const getPassword = (req: Request, res: Response) => {
  
  console.log("entrando a getPassword");
  return res.send("get Password");
};

const setPassword = (req: Request, res: Response) => {
  
  console.log("entrando a setPassword");
  return res.send("set Password");
 };

 const deletePassword = (req: Request, res: Response) => {
  
  console.log("entrando a deletePassword");
  return res.send("delete Password");
 };
  


export { getPassword, setPassword, deletePassword }