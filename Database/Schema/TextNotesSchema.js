
const {Schema, model} = require("mongoose");

const TextNoteSchema = new Schema({

    title: String,

    file_name: String,

    user: String
    
});

TextNoteSchema.static.findByUser = function(user){

    return this.where({user: new RegExp(user, "i")});

}

const TextNoteModel = model("text_notes", TextNoteSchema);

module.exports = TextNoteModel;
