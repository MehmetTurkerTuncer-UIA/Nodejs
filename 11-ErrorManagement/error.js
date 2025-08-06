"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* -------------------------------------------------------*/ 

app.get('/user/:id', function (req, res) {

    /* ------------------------------------------------------- 

    throw new Error('Hata olustu')
    res.send({
         id: req.params.id,
         message: 'Hello World'
     })
         */

    if(isNaN(req.params.id)){

        throw new Error('Id parametresi sayi olmak zorundadir')
    }else{
        res.send('Id dogrudur')

    }
     
    });


/* ------------------------------------------------------- */



/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT));

