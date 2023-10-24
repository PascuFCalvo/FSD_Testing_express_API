import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Like } from "typeorm";
import { User } from "../models/User";
import jwt  from "jsonwebtoken";

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
    const messageReturn = "SE HA CRADO EL USUARIO";
    
    const newUserName = req.body.name;
    const newUserEmail = req.body.email;
    const newUserPassword = req.body.password;

    function ValidateEmail(email: string) {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return res.json("You have entered an invalid email address!");
      }
    }
    ValidateEmail(newUserEmail);

    const encriptedPassword = bcrypt.hashSync(newUserPassword, 10);

    const createdUSer = await User.create({
      name: newUserName,
      email: newUserEmail,
      password: encriptedPassword,
    }).save();

    const response = {
      message: messageReturn,
      createdUSer,
    };

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

const loginUser = async (req:Request, res:Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOneBy({
      email: email,
    });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({
        success: false,
        message: "Incorrect password",
      });
    }
    //creando el jsonwebtoken
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      "Pascu",
      {
        expiresIn: "2h",
      }
    );

    return res.json({
      success: true,
      message: "Login successful",
      token: token,
      data: {
        name: user.name,
        id: user.id,
        email: user.email,
      },
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Can't log in user",
      error: error,
    });
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

const profile = async(req: Request, res: Response)=>
{
  console.log("hola")
  return res.json({
    "message":"PROFILE"
})
}

export {
  profile,
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  modifyUserById,
  inactivateUser,
  activateUser,
  getUserByName,
  loginUser,
};
