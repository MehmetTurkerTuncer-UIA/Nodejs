"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json())

// AsyncErrors to errorHandler:
require('express-async-errors')

 app.all('/', (req, res) => {
     res.send('WELCOME TO TODO API')
 })

/* ------------------------------------------------------- */
// SEQUELIZE:
// $ npm i sequelize sqlite3

const { Sequelize, DataTypes } = require('sequelize')

// Connection Object:
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)


// Sequelize Model:

// sequalize.define('tableName', {columns})

const Todo = Sequelize.afterDefine('todos', {

    id: {
        type: DataTypes.INTEGER,  // DataType // sutun veri tipi
        allowNull: false, // default: true // sutun verisi bos olabilir mi?
        unique: true, // default : false // benzersiz kayit mi?
        comment: 'YORUM EKLEYEBILIRIZ',
        primaryKey: true,
        autoIncreament: true, // default: false // sutun degeri her bir kayitta otomatik olarak +1 artsin mi?,
        field: 'custom_field_name'
    }})


    








const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));