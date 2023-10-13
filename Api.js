//Esta clase representa un servidor
import express from "express";
import {rutasAPI} from "./routes/rutasHoteles.js"
import { EstablecerConexionBD } from "./database/conexion.js";

export class Api {
  constructor() {
    this.app = express()
    this.conectarBD()
    this.procesarPeticiones()
  }

  //1. Levantar el servidor
  levantarServidor() {
    this.app.listen(3000, function () {
      console.log("servidor operando");
    });
  }

  //2. Atiende las peticiones y responde
  procesarPeticiones() {
    this.app.use("/",rutasAPI)
    this.app.use (express.json())
  }

  //3. Se conecta a la Base de datos
  conectarBD(){
    EstablecerConexionBD()
  }
}
