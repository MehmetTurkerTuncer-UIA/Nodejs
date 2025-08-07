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
app.use(express.json())

app.use(express.text())

app.use(express.urlencoded({extended: true}))

app.all('/', (req, res) => {

    res.send({
        params:req.params,
        query: req.query,
        headers: req.headers,
        body: req.body
    })
})

//Static dosyalara ulasabilmek icin app use da bu kodu kullanmak lazim
app.use('/images', express.static('./images'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));