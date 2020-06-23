const mongoose = require('mongoose');
const { model } = require('./user.model');
const {Schema} = mongoose; 

const CommentSchema = new Schema({

    comment: { type: String, require: true},
    description: { type: String },
    author: { 
        type: Schema.Types.ObjectId, 
        ref: "user" , 
        require: true, 
        autopopulate: true //estes es que cada ves que busquemos una idea nos traiga consigo la informacion de su autor
    }
});

//los plugin no son mas que algunos metodos que te dan mas poder a mongoose comom tal ,EJEMPLO el autopopulate
//basicamente yo lo podia hacer sin instalar dicha dependencia pero ese inplica que cada ves que hayga un fine, tendria que estarelacionando con la entidad  etc
//autopopulate: true 
CommentSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model('comment',CommentSchema)