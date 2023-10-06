import { request } from "express"

export class ControladorHabitacion{
    constructor(){}

    buscarTodas(request,response){
        try{
//1. hay que recibir datos
//2. intentare conectarme a la base de datos
//3. envio de la respuesta
response.status(200).json({
    "estado":true,
    "mensaje":"exito buscando las habitaciones..",
    "datos":"aca van los datos de  consulta en la BD"
}) }catch(error){
    response.status(200).json({ 
        "estado":false,
    "mensaje":"Fallamos buscando las habitaciones"+error,
    "datos":"null"})
}
    }
    buscarPorId(request,response){
        try {
//1. hay que recibir datos(si)
let id=request.params.id
//2. con el id que mando el cliente busco la habitacion en BD
//3. respodno al cliente



        } catch (error) {}
    }
    modificar(request,response){
        try {
//1. hay que recibir datos (si)
let idHabitacion=request.params.id
let datosmodificar=request.body
//2. Modificar en BD
//3. enviar respuesta
response.status(200).json({
    "estado":true,
    "mensaje":"exito buscando las habitaciones..",
    "datos":null
})

        } catch (error) {
             response.status(200).json({ 
        "estado":false,
    "mensaje":"Fallamos buscando las habitaciones"+error,
    "datos":"null"})

          }  }
        }
    registrar(request,response)
      try {
        //1. hay que recibir datos (si)
        let datosRegistrar=request.body


      } catch (error) {
        
      }
    
    eliminar(request,response)
        try {
//1. hay que recibir datos (si)
let id=request.params.id
//2. eliminela de la BD
//3. responda
      response.status(200).json({
        estado: true,
        mensaje: "exito borrando la habitacion",
        datos: null
      });
        } catch (error) {
           response.status(400).json({
        estado: true,
        mensaje: "fallamos borrando las habitaciones",
        datos: null 
        })
    }

    
