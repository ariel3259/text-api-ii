
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const User = require("../../Database/Schema/UserSchema");

//Authentificates an user

module.exports = async (req, res) => {

    if(!req.body.email || !req.body.password)

        return res.status(400).send({message: "Incomplete data"});

    const user = await User.byEmail(req.body.email);

    if(!user[0])
    
        return res.status(400).send({message: "The user doesn't exists"});
    
    const validate = await bcrypt.compare(req.body.password, user[0].password);

    if(!validate)

        return res.status(400).send({message: "Wrong password"});

    jwt.sign({check: true}, "loremloremlorem", {algorithm: "HS256", expiresIn: "45m"}, (err, token) => {

        if(err)

            return res.status(500).send({message: "Something is wrong"});

        res.send({

            message: `Welcome ${user[0].name} ${user[0].last_name}`,

            token,

            user: `${user[0].name} ${user[0].last_name}`

        });

    });
    
}