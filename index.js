
const express = require("express");

const app = express();

const controller = require("./Controller/Controller");

const middleware = require("./Middleware/Middlewares");

const con = require("./Database/Database");

//Middlewares

middleware(app);

//Routes

controller(app);

//Initializing server

app.listen(8000, () => {

    console.log("server online on port 8000");

    con();

});