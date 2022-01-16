//Modifies the file content

const {writeFile} = require("fs");

module.exports = (req, res) => {

    if(!req.body.file_name || !req.body.content)

        return res.status(400).send({message: "Incomplete data"});

    const fileName = req.body.file_name;

    const content = req.body.content;

    writeFile(`./Txt/${fileName}`, content, err => {

        if(err){

            console.log(err);

            return res.status(500).send({message: "Something is wrong"});

        }

        res.send({message: "Saved file"});

    });

}