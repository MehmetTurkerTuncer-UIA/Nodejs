"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8001;

/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json())

// AsyncErrors to errorHandler:
require('express-async-errors')

// SEQUELIZE:
// Model Controller kullanilacagi icin orada require edilmelidir
//const Todo = require('./app/models/todo.model')

// ROUTER
app.use(require('./routes/todo.router'))

// ErrorHandler
app.use(require('./app/middlewares/ErrorHandler'))
/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));