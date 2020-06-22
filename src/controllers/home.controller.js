let _homeService = null;

class HomeController {
    //HomeService de donde sale esto ? quien inyecta esto? esto lo hace awilix (viene por inyeccion de dependencia )
    constructor({HomeService}){
        _homeService = HomeService;
    }
    //express se encarga de pasarlo req res
    index(req, res){
        return res.send(_homeService.index());
    }
}

module.exports= HomeController;
