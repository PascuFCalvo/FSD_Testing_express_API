import express from "express";
import { router as routerUsers } from "./routes/usersRoutes"
import { router as routerStatus } from "./routes/statusRoutes"

import { AppDataSource } from "../database";


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users",routerUsers);
app.use("/status",routerStatus);


AppDataSource.initialize()
.then(() => {
 console.log('Database connected');
 app.listen(PORT, () => {
  console.log("server running, listening on port: ", PORT);
});
})
.catch(error => {
 console.log(error)
})



