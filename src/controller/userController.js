import {
  createUserService,
  deleteUserService,
  getAllUserService,
  getUserByIdService,
  updateUserService,
} from "../model/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const newUser = await createUserService(name, email);
    handleResponse(res, 201, "create user success", newUser);
  } catch (error) {
    next(error);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const users = await getAllUserService();
    handleResponse(res, 200, "fetch data already done ", users);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "id not found",
      });
    }

    const existingUser = await updateUserService(id, name, email);
    res.status(200).json({
      success: true,
      message: "updated user successful",
      existingUser,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "id not found",
      });
    }
    const user = await getUserByIdService(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "id not found",
      });
    }
    const user = await deleteUserService(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ success: true, user, message: "User has been deleted." });
  } catch (error) {
    next(error);
  }
};
