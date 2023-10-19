import { Router } from "express";
import {getPassword, setPassword, deletePassword} from "../controllers/passwordController";

const router = Router ();

router.get("/", getPassword);
router.put("/", setPassword);
router.delete("/", deletePassword);

export { router }