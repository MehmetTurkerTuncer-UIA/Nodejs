"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* -------------------------------------------------------*/ 

/* ------------------------------------------------------- 
    
app.get('/user/:id', function (req, res) {

    throw new Error('Hata olustu')
    res.send({
         id: req.params.id,
         message: 'Hello World'
     })
         

    if(isNaN(req.params.id)){

        res.errorStatusCode = 400

        throw new Error('Id parametresi sayi olmak zorundadir')
    }else{
        res.send('Id dogrudur')

    }
     

    });
*/   

/* ------------------------------------------------------- 

app.get('/user/:id', function (req, res) {

    try{
        if(isNaN(req.params.id)){

            throw new Error('Id parametresi sayi olmak zorundadir')
        }else{
            res.status(200).send(
                {
                    
                    error: false,
                    message: 'Hersey gicir'
    
                }
            )
        }
        

    }catch (err) {
        // Hata olmasi halinde catch calisir

    next(err)

        
        res.status(400).send(
            {
                
                error: true,
                message: err.message

            }
        )
    
  
    }});

    */


/* ------------------------------------------------------- 
// ASYNC ASENKRON FONKSIYONLAR    hata yakalama then catch kullan

const asyncFunction = async () => {
    throw new Error('async-error')

}

app.get('/async', (req, res, next) => {
    asyncFunction()
        .then()
        .catch((err) => { next(err) })
})
*/


/* ------------------------------------------------------- */
// npm i express-async-error 


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
// Errorhandler 4 parametreli olmasi gerekir
// Errorhandler sayfanin en sonuna yerlestirilir



const errorHandler = (error, req, res, next) => {

    console.log('errorhandler calisti')
    const statusCode = res?.errorStatusCode || 500  


        res.status(statusCode).send({
                error:true,
                message:error.message

        })


}

app.use(errorHandler)

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT));

