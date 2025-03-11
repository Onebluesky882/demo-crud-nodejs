import { createUserService, getAllUserService } from "../model/userModel.js";

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
