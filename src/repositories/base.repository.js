    //este repocitorio no s servira de plantilla par un CRUD culla responsabilidad va a ser heredadas con otros repositorios 
    class BaseRepository {
        // se realiza los metodo tradicionale spara  de una base de dato RED CREATE UPDATE DELET
        //model: al modelo o entidad de mongo db que va a interactuar 
        constructor(model){
            this.model = model;
        }
        //Metodo de forma Asyncronica   
        async get(id){
            return await this.model.findById(id);
        }
        async getAll(){
            return await this.model.find(); 
        }
        async create(entity){
            return await this.model.create(entity);
        }
        async update(id, entity){
            return await this.model.findByIdAndUpdte(id,entity,{new: true});
        }
        async delete(id){
            return await this.model.findByIdAndDelete(id); 
        } 

    }
    module.exports = BaseRepository;