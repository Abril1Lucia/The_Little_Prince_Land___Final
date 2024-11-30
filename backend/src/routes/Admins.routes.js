import { CreateAdmin, showAdmins } from "../controllers/Admins.controller.js";
import express from "express"

export const adminsRouter = express.Router();


adminsRouter.post('/crear', CreateAdmin);

adminsRouter.get('/obtener', showAdmins);