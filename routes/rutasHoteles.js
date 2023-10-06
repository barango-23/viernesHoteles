//espacio para definir las rutas
//o endpoints especificos de SU API
import express from "express";


//importo los controladores
import{ControladorHabitacion} from "../controllers/ControladorHabitacion.js";
import { ControladorReservas } from "../controllers/ControladorReservas.js";

export let rutasAPI = express.Router();

//ACA PONE SUS ENDPOINTS
rutasAPI.post("/api/habitaciones")
rutasAPI.get("/api/habitaciones")
rutasAPI.get("/api/habitacion/:id")
rutasAPI.put("/api/habitaciones/:id")
rutasAPI.delete("/api/habitaciones/:id")

