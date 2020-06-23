const BaseRepository = require("./base.repository");
let _idea = null;

class IdeaRepository extends BaseRepository {
    constructor({ Idea }){
        super(Idea);
        _idea = Idea;//esto es si hay un metodo adicional que este afudera del CRUD ()
    }
    //Metodo a fuera del crud
    async getUserIdeas(author){
        return await _idea.find({author}) 
    }
}

module.exports = IdeaRepository;