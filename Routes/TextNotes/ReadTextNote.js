
const {readFile} = require("fs");

module.exports = (req, res) => {

   
    if(!req.headers.file_name)

        return res.status(400).send({message: "Incomplete Data"});

    const fileName = req.headers.file_name;

    readFile(`./Txt/${fileName}`, {encoding: "utf-8"}, (err, text) => {

        if(err){
            
            console.log(err);

            res.status(500).send({message: "Something is wrong"});

        }

        res.send(text);

    });
    
}