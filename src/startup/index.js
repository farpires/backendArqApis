//este seria la clase que le va a dar inicio a nuestra aplicacion , en tonces es tan simple 
const express = require('express');

let _express = null;
//declaramos estas varibales para que sea privado,
let _config = null;

class Server{
    //para que awilix lo interprete tiene que ser exactamente el mismo 
    constructor({config,router}){
        _config = config;
        _express = express().use(router);
    }

    start(){//lo que hace este metodo es retornar una promesa, que va a ser la indicada de inicializar nuestro server
        return new Promise(resolve=>{
            _express.listen(_config.PORT,()=>{
                console.log(_config.APPLICATION_NAME + "API runing  on port "+ _config.PORT)
            });
            resolve();
        })
    }

}


module.exports = Server;
