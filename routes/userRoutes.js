import { Router } from "express";
import {
  getUsers,
  signup,
  getUsers
} from '../controllers/userController.js';
const userRoutes = Router();
userRoutes.get('/api/users/info', getUsers);
userRoutes.post('/api/users/signup', signup);
userRoutes.get('/api/users', getUsers);
export { userRoutes };