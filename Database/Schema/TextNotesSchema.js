
const {Schema, model} = require("mongoose");

const TextNoteSchema = new Schema({

    title: String,

    file_name: String,

    user: String
    
});

TextNoteSchema.query.byUser = function(user){

    return this.where({user: new RegExp(user, "i")});

}

TextNoteSchema.query.byFileName = function(fileName){

    return this.where({file_name: new RegExp(fileName, "i")});
    
}

const TextNoteModel = model("text_notes", TextNoteSchema);

module.exports = TextNoteModel;
