
const mongoose = require("mongoose");

module.exports = () => {

    try{

        mongoose.connect("mongodb://127.0.0.1:27017/text_note_db");

        console.log("Connected to database");
        

    }catch(err){

        console.log(err);

    }

}