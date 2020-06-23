const { model } = require("../models/user.model");

const BaseRepository = require('./base.repository')
let _user = null; 

class UserRepository extends BaseRepository{
    constructor({ User }){
        super(User);
        _user = User; //esto es si hay un metodo adicional que este afuera del CRUD () 
    }
    //Metodo fuera del CRUD
    async getUserByUsername(username){
        return await _user.findOne({ username });
    }

}
module.exports = UserRepository;