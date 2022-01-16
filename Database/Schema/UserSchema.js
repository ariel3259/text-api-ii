
const {Schema, model} = require("mongoose");

const UserSchema = new Schema( {
     
    name: String,

    last_name: String,

    email:{
        
        type: String,
        
        unique: true

    },

    password: String

});

UserSchema.statics.byEmail = function (email){

    return this.where({email: new RegExp(email, "i")});

}

const UserModel = model("users", UserSchema);


module.exports = UserModel;