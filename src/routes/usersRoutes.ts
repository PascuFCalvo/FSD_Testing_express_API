import { Router } from "express";
import {getAllUsers, getUserById, createUserById, modifyUserById, deleteUserById} from "../controllers/usersControllers";

const router = Router ();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/:id", createUserById);
router.put("/:id", modifyUserById);
router.delete("/:id",deleteUserById );

export { router }