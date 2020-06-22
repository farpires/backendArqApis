//este archico va a ser el touter principal para inyectar los rauter que quieramos
//encargado de hacer la configuracion de todas las routas
const express = require("express");
const cors  = require('cors');      //midelwer
const helmet = require('helmet');   //nos ayuda en aspecto de seguridad que por defecto vienen, nos libramos de muchas brechas de seguridad utilizando este middelwer
const compresion = require('compression'); //nos ayudaa comprimir las peticiones http, para que sea mucho mas rapido
require('express-async-errors');//ESTOS NOS AYUDA A CAPTURAR LAS ESEPCIONES ASINCRONAS QUE PRODUCEN LAS PROMESAS NORMALMENTE
const {NotFoundMiddleware, ErrorMiddleware} = require("../middlewares");// estos middelwer son para captura de errores y estatus cod
const { route } = require("express/lib/router");

// vamos a exportar una funcion y esa funcion require  las rutas necesarias
module.exports = function({HomeRoutes}){
    const router = express.Router();
    const apiRoutes =express.Router();
//estos middlewer se ejecuta antes de que llege a la siguiente logica
//hay otros middelwer que se ejecuta mucho despues o justo en medio  
    apiRoutes
    .use(express.json())//se puede utilizar el boryparse
    .use(cors())
    .use(helmet())
    .use(compresion());

    apiRoutes.use("/home", HomeRoutes);

    router.use("/v1/api", apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);
    return router;
}