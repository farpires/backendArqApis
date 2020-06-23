 const mongoose = require("mongoose");
 const {Schema} = mongoose;
 const {compareSync, hashSync, genSaltSync} = require("bcryptjs");//cacaremos metodos, para encriptar las contrasena d elos usuarios , y hace las conparaciones de las contrasenas encriptadas, y tambien para generar nuestro salt
//compareSync compara las contrasena una ves que este encriptadas,  
//hashSync que nos ayudar a crear un hash para nuestra contrasena
//genSaltSync para crear un salta que se le agrega al hashSync en la contrasena

    const UserSchema = new Schema({

    name: { type: String, required: true},
    usename: { type: String, required: true},
    password: { type: String, required: true},
});

//metodo para mongoose {mongooo usa toJSON cada ves que se va a devolver un objeto }
UserSchema.methods.toJSON = function(){//cada ves que se lea un documento quiero eliminar el campo contrasena PORQUE LA CONTRASENA ES ALGO QUE NO QUEREMOS QUE LOS CLIENTE VEAN 
    let user = this.toObject();//metodo de mongoose ,para que combierta ese documento de mongo en un objeto de javascript NORMAL
    delete user.password;
    return user; 
}

//comparara las constrasena
UserSchema.methods.comparePasswords = function(password){
    return compareSync(password,this.password);
}

//hook para cada ves que se SAVE  se aplique la sigueinte logica 
UserSchema.pre('save',async function(next){
    const user = this;
    //validar que se esta modifica la contrasena
    if(!user.isModified("password")){
        return next();
    }
    //peros si se esta modificando la constrasena generamos un salt
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
})//se coloca una funcion tradicional para que nos e pierdae el scout de mongoose

module.exports = mongoose.model('user',UserSchema);


// utilizaremos los hook de mongoo