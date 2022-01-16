//Destroy a text note

const TextNote = require("../../Database/Schema/TextNotesSchema");

const {rm} = require("fs");

module.exports = async (req, res) => {

    if(!req.headers.file_name)

        return res.status(400).send({message: "Incomplete Data"});

    const fileName = req.headers.file_name;

    await TextNote.deleteOne().byFileName(fileName);

    rm(`./Txt/${fileName}`, err => {

        if(err){

            console.log(err);

            return res.status(500).send({message: "Something is wrong"});
        }

        res.send({message: "Erased text note"});

    });

}