//all the middlewares are here, no exceptions

const express = require("express");

const cors = require("cors");

const ValidatesToken = require("../Utils/ValidatesToken");

module.exports = app => {

    app.use(express.json());

    app.use(cors());

    app.use(ValidatesToken);

}