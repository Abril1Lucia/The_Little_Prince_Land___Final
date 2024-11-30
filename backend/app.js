//vamos a configurar el sevidor con express

import express from "express";
import dotenv from "dotenv"; //dependencia para manejar variables de entorno we
import { connectionMongo } from "./src/Config/dataBase.js";
import { productRouter } from "./src/routes/Image.routes.js";
import { usersRouter } from "./src/routes/Users.routes.js";
import loginRouter from "./src/routes/login.routes.js";
import { adminsRouter } from "./src/routes/Admins.routes.js";


const app = express(); 
dotenv.config(); //se configura para poder usar variables we
const port = process.env.PORT;
connectionMongo();


app.use(express.json());
app.use('/imagenes', productRouter);
app.use('/usuarios', usersRouter)
app.use('/iniciarSesion', loginRouter)
app.use('/Admin', adminsRouter)

app.listen(port, () => {
  console.log("lo logramos :)", port);
});
