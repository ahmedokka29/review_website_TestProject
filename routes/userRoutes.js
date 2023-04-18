import { Router } from "express";
import {
  getUser,
  signup,
  getUsers,
  deleteUser
} from '../controllers/userController.js';
const userRoutes = Router();
userRoutes.get('/api/users/info', getUser);
userRoutes.post('/api/users/signup', signup);
userRoutes.get('/api/users', getUsers);
userRoutes.delete('/api/users/:id', deleteUser);
export { userRoutes };
