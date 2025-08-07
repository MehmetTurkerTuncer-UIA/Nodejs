"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILT-IN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// Gelen data almak

app.all('/', (req, res) => {

    res.send({
        message: 'Tamamdir'
    })
})


/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));