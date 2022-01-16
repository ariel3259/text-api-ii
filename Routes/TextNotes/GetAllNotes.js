
const TextNote = require("../../Database/Schema/TextNotesSchema");

module.exports = async (req, res) => {

    if(!req.headers.user)

        return res.status(400).send({message: "Incomplete data"});
    
    const user = req.headers.user;

    const text_notes = await TextNote.findByUser(user);

    return res.send(text_notes);

}