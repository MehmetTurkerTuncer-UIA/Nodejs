"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

app.get('/user/:id', function (req, res, next) {

    // Hata gönder ve sistemi kilitle (kodlar işlemeye devam etmez) // Block Code
    throw new Error('Hata oluştu.')

    res.send({
         id: req.params.id,
         message: 'Hello World'
     })


/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT));

