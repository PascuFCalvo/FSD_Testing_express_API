import  { Request, Response} from "express";
import * as readline from "readline";

let users: any = ["Pascual", "Ana", "Pepe", "Dani"];

const getAllUsers = (req: Request, res:Response) => {
   console.log(users)
   return res.json(users);
}

const getUserById = () => {}
const createUserById = (req: Request, res:Response) => {
   const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    rl.question("Enter the new user to add to user list: ", (name) => {
      if (name) {
        users.push(name); // Agrega el nuevo usuario al array
        
        rl.close();
        return res.send(`User >>${name}<< added to the list [${users}]`); // Devuelve la lista actualizada de usuarios
      } else {
        rl.close();
        return res.status(400).send("Please, enter a valid name.");
      }
    });
}
const deleteUserById = (req: Request, res:Response) => {
   const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
   
    rl.question(`Enter a name of the list to delete[${users}]=>`, (userName) => {
      rl.close();
  
      
  
      const index = users.indexOf(userName);
  
      if (index === -1) {
        return res.status(400).send(`user ${userName} no exists`);
      }
  
      users.splice(index, 1);
      
      return res.send(`User >>${userName}<< deleted from users list [${users}]`);
      
    });
}
const modifyUserById = () => {}

export { getAllUsers, getUserById, createUserById, deleteUserById, modifyUserById }