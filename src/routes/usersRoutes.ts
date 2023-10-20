import { Router } from "express";
import {getAllUsers, getUserById, createUser, modifyUserById, deleteUserById, inactivateUser} from "../controllers/usersControllers";

const router = Router ();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", modifyUserById);
router.delete("/:id",deleteUserById );
router.delete("/inactivate/:id",inactivateUser)


export { router }