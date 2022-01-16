// all the controller routes are here

const register = require("../Routes/Users/Register");

const auth = require("../Routes/Users/Auth");

const getAllNotes = require("../Routes/TextNotes/GetAllNotes");

const readTextNote = require("../Routes/TextNotes/ReadTextNote");

const addOneTextNote = require("../Routes/TextNotes/AddOneTextNote");

const writeTextNote = require("../Routes/TextNotes/WriteTextNote");

const destroyOneTextNote = require("../Routes/TextNotes/DestroyOneTextNote");

module.exports = app => {

    app.post("/api/users/register", register);

    app.post("/api/users/auth", auth);

    app.route("/api/text_notes")

        .get(getAllNotes)

        .post(addOneTextNote)

        .delete(destroyOneTextNote);
    
    app.get("/api/text_notes/read", readTextNote);

    app.post("/api/text_notes/write", writeTextNote);
    
}