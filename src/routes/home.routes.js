const {Router} = require('express');
//awalis va a tomar Homecontroller 
module.exports = function({HomeController}){
    const router = Router();
    router.get("/",HomeController.index);
    return router;
}