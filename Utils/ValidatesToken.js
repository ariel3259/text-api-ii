//validate if the user is connected or not

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    if(req.path === "/api/users/auth" || req.path === "/api/users/register")

        return next();

    if(!req.headers.authorization)

        return res.status(400).send({message: "there's no token, no access"});

    const token = req.headers.authorization;

    jwt.verify(token, "loremloremlorem", err => {

        if(err)

            return res.status(400).send({message: "invalid token, no access"});

        next();

    });

}