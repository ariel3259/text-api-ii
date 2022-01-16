// all the controller routes are here

const register = require("../Routes/Users/Register");

const auth = require("../Routes/Users/Auth");

module.exports = app => {

    app.post("/api/users/register", register);

    app.post("/api/users/auth", auth);

}