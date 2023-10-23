import { Router } from "express";
import {getAllUsers, getUserById, createUser, modifyUserById, deleteUserById, inactivateUser, activateUser, getUserByName, loginUser} from "../controllers/usersControllers";

const router = Router ();

router.get("/", getAllUsers);
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);
router.put("/:id", modifyUserById);
router.delete("/:id",deleteUserById );
router.get("/name/:name", getUserByName);
router.put("/inactivate/:id",inactivateUser)
router.put("/activate/:id",activateUser)



export { router }