import loginUsers from "../services/loginUsers.service.js";

import loginAdmins from "../services/loginAdmin.service.js";

import express from "express";

const loginRouter = express.Router();

loginRouter.post('/Admin', loginAdmins)

loginRouter.post('/Users', loginUsers)

export default loginRouter;