const {createContainer, asClass, asValue, asFunction} = require("awilix"); 

//vamos a solicitad nuestro config, es para que las varibales de entorno deigual forma sean inyectada , donde las necesitemos , por inyeccion de dependencia 
//config
const config = require('../config');
const app = require('.')


//services
const {HomeService} = require("../services");

//controler
const {HomeController} = require("../controllers");

//routes
const {HomeRoutes} = require('../routes/index.routes'); 
const Routes = require('../routes')



const container = createContainer();

//continer tiene metodos vien utiles
//creamos un nuevo tipo de inyeccion

container
    /*A QUI SE CONFIGURA PRINCIPAL DE LA APLICACION*/
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),//todas las rutas
        config: asValue(config)
    })

    /*A QUI SE CONFIGURA TODOS LOS SERVICIO */
    .register({
    //key de identificacion de inyeccion-lo que va a inyectar, singleton para que sea la misma instancia 
    HomeService: asClass(HomeService).singleton()
    })

    
    /*A QUI SE CONFIGURA TODOS LOS CONTROLLERS */
    .register({//express a la hora de llamar  un controlador, el scout cambia --haemos esto para que el scout se mantenga y podamos hacer uso del servicio
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })

    
    /*A QUI SE CONFIGURA TODOS LAS RUTAS*/
    .register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
    });

module.exports = container;