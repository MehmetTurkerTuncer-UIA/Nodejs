'use strict'
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters. 
//? Last parameter is for next().


app.get('/', (req, res, next) => {
    console.log('middleware calisti')

    if(req.query.courseName== 'clarusway'){
        
        next()
    }else{
        res.send({
            message: 'course name is fail'
        })
    }


})

app.get('/', (req, res) =>{

    console.log('route-path calisti')

    res.send({
        message: 'Hello world'
    })

})



/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));