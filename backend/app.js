//vamos a configurar el sevidor con express

import express from "express";
import dotenv from "dotenv"; //dependencia para manejar variables de entorno we
import { connectionMongo } from "./src/Config/dataBase.js";
import { productRouter } from "./src/routes/Image.routes.js";
import { usersRouter } from "./src/routes/Users.routes.js";
import loginRouter from "./src/routes/login.routes.js";
import { adminsRouter } from "./src/routes/Admins.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express(); 
dotenv.config(); //se configura para poder usar variables we
const port = process.env.PORT;
connectionMongo();
app.use(cors())


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use('/imagenes', productRouter);
app.use('/usuarios', usersRouter)
app.use('/iniciarSesion', loginRouter)
app.use('/Admin', adminsRouter)


app.use(express.static(path.join(__dirname, "public")));

// Ruta principal para servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(port, () => {
  console.log("lo logramos :)", port);
});


// Exportar la aplicación sin iniciar el servidor
export default app;