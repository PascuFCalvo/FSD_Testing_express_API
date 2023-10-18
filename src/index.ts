import express from "express";
import * as readline from "readline";

const app = express();
app.use(express.json());

let users: any = ["Pascual", "Ana", "Pepe", "Dani"];

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running, listening on port: ", PORT);
});

app.get("/status", (req, res) => {
  const status = { Status: "Running" };
  return res.send(status);
});

// Get all users
app.get("/users", (req, res) => {
  return res.json(users);
});

// Add users
app.post("/users", (req, res) => {
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
});

// Delete users
app.delete("/users", (req, res) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log(users);
  rl.question(`Enter a name of the list to delete[${users}]=>`, (userName) => {
    rl.close();

    const index = users.indexOf(userName);

    if (index === -1) {
      return res.status(400).send(`user ${userName} no exists`);
    }

    users.splice(index, 1);
    return res.send(`User >>${userName}<< deleted from users list [${users}]`);
  });
});
