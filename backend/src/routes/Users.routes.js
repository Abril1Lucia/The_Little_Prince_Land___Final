import { createUser, showUsers } from '../controllers/Users.controllers.js';
import express from 'express'

export const usersRouter = express.Router();

usersRouter.post('/crear', createUser);

usersRouter.get('/obtener', showUsers);
