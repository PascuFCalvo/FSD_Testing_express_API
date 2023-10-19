import express from "express";
import { router as routerUsers} from "./routes/usersRoutes"
import { router as routerStatus} from "./routes/statusRoutes"

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users",routerUsers);
app.use("/status",routerStatus);

app.listen(PORT, () => {
  console.log("server running, listening on port: ", PORT);
});