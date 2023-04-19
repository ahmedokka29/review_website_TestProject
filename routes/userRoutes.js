import { Router } from "express";
import {
  getUser,
  signup,
  getUsers,
  deleteUser,
  login,
  updateUser,
} from '../controllers/userController.js';

const userRoutes = Router();

userRoutes.get('/api/users', getUsers);
userRoutes.post('/api/users/signup', signup);
userRoutes.post('/api/users/login', login);
userRoutes.get('/api/users/info', getUser);
userRoutes.post('/api/users/update', updateUser);
userRoutes.delete('/api/users/delete', deleteUser);

export { userRoutes };
