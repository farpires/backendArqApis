const mongoose = require('mongoose');
const { model } = require('./user.model');
const {Schema} = mongoose; 

const IdeaSchema = new Schema({

    idea: { type: String, require: true},
    description: { type: String },
    upvotes: [{ type: Boolean }],//votos positivos
    dowvotes: [{ type: Boolean }],//votos negativo
    author: { 
        type: Schema.Types.ObjectId, 
        ref: "user" , 
        require: true, 
        autopopulate: true //estes es que cada ves que busquemos una idea nos traiga consigo la informacion de su autor
    },
    comments:[{
        
        type: Schema.Types.ObjectId, 
        ref: "comment" , 
        require: true, 
        autopopulate: true //estes es que cada ves que busquemos una idea nos traiga consigo la informacion de su autor     
    }]
});

IdeaSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model('idea',IdeaSchema)