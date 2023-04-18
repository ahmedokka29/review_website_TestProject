import { Router } from "express";
import {

    signup,
    getUsers
  } from '../controllers/userController.js';
const userRoutes = Router();
userRoutes.get('/api/users/info', getUsers);
userRoutes.post('/api/users/signup', signup);
export { userRoutes };