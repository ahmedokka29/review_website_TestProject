import { Router } from "express";
import {
  getUser,
  signup,
  getUsers
} from '../controllers/userController.js';
const userRoutes = Router();
userRoutes.get('/api/users/info', getUser);
userRoutes.post('/api/users/signup', signup);
userRoutes.get('/api/users', getUsers);
export { userRoutes };
