//Create a file and storages title,user and file name at database

const TextNotes = require("../../Database/Schema/TextNotesSchema");

const {writeFile} = require("fs");

module.exports = async (req, res) => {

    if(!req.body.user || !req.body.title)

        return res.status(400).send({message: "Incomplete Data"});
    
    req.body.file_name = `${req.body.title}_${Date.now()}_${req.body.user}.txt`.replace(/ /g, "_");

    const newTextNote = new TextNotes(req.body);

    await newTextNote.save();

    writeFile("./TextNotesSaved/"+req.body.file_name, "Sample text", {flag: "w+"}, (err) => {

        if(err){

            console.log(err);

            return res.status(500).send({message: "Something is wrong"});

        }

        res.send({message: "Added a text note"});

    });
    
}