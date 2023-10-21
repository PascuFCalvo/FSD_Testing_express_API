import { Request, Response } from "express";
import { User } from "../models/User";
import { Like } from "typeorm";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const userList = await User.find();
    const messageReturn = "LISTADO DE USUARIOS";

    const response = {
      message: messageReturn,
      userList,
    };

    return res.json(response);
  } catch (error) {
    return res.send(error);
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const userToShow = req.params.id;
    const messageReturn = "USUARIO SELECCIONADO";
    const userToShow_ = await User.findOneBy({
      id: parseInt(userToShow),
    });

    const response = {
      message: messageReturn,
      userToShow_,
    };
    return res.json(response);
  } catch (error) {
    return res.send(error);
  }
};

const getUserByName = async (req: Request, res: Response) => {
  try {
    const nameToSearch = req.params.name;
    const messageReturn = "USUARIO SELECCIONADO POR NOMBRE";
    const userToShow = await User.find({
      where: {
        name: Like(`%${nameToSearch}%`),
      },
    });

    const response = {
      message: messageReturn,
      userToShow,
    };
    return res.json(response);
  } catch (error) {
    return res.send(error);
  }
};






const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    const messageReturn = "SE HA CRADO EL USUARIO";
    const newUserName = req.body.name;
    const newUserEmail = req.body.email;
    const newUserPassword = req.body.password;

    await User.create({
      name: newUserName,
      email: newUserEmail,
      password: newUserPassword,
    }).save();

    const response = {
      message: messageReturn,
      newUser,
    };

    return res.json(response);
  } catch (error) {
    return res.send(error);
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userToDelete = req.params.id;
    const messageReturn = "SE HA ELIMINADO EL USUARIO";
    const userToRemove = await User.findOneBy({
      id: parseInt(userToDelete),
    });

    let userRemoved = await User.remove(userToRemove!);

    const response = {
      message: messageReturn,
      userRemoved,
    };
    return res.json(response);
  } catch (error) {
    return res.send(error);
  }
};

const inactivateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const messageReturn = "SE HA DESACTIVADO EL USUARIO";

    // Actualiza el valor de isActive a false
    await User.update({ id: parseInt(userId) }, { isActive: false });

    const updatedUser = await User.findOneBy({
      id: parseInt(userId),
    });

    const response = {
      message: messageReturn,
      updatedUser,
    };

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

const activateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const messageReturn = "SE HA RESTABLECIDO EL USUARIO";

    await User.update({ id: parseInt(userId) }, { isActive: true });

    const updatedUser = await User.findOneBy({
      id: parseInt(userId),
    });

    const response = {
      message: messageReturn,
      updatedUser,
    };

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

const modifyUserById = async (req: Request, res: Response) => {
  try {
    const userToUpdate = req.params.id;
    const updatedUserData = req.body;
    const messageReturn = "SE HA ACTUALIZADO EL USUARIO";

    await User.update(
      {
        id: parseInt(userToUpdate),
      },
      updatedUserData
    );

    const updatedUser = await User.findOneBy({
      id: parseInt(userToUpdate),
    });

    const response = {
      message: messageReturn,
      updatedUser,
    };

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

export {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  modifyUserById,
  inactivateUser,
  activateUser,
  getUserByName

};
