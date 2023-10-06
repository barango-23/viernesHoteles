import express from "express";

export let rutasAPI = express.Router();

//ACA PONE SUS ENDPOINTS
rutasAPI.post("/api/reservas"); //lleva datos
rutasAPI.get("/api/reservas");
rutasAPI.get("/api/reservas/:id");
rutasAPI.put("/api/reservas/:id");//lleva datos
rutasAPI.delete("/api/reservas/:id");
