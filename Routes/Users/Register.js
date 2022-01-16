
const bcrypt = require("bcrypt");

const User = require("../../Database/Schema/UserSchema");

//Register an user

module.exports = async (req, res) => {

    if(!req.body.name || !req.body.last_name || !req.body.email || !req.body.password )

        return res.status(400).send({message: "Incomplete data"});

    if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(req.body.email))

        return res.status(400).send({message: "Invalid email"});

    const salt = await bcrypt.genSalt(8);

    req.body.password = await bcrypt.hash(req.body.password, salt);

    const user = new User(req.body);

    await user.save();

    res.send({message: "Congratulations, your new account has been created"});

}