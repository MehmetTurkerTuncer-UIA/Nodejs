"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
//? "Router" is special app for URL control in ExpressJS.
/*
app.get('/', (req, res) => {
     res.send({
         message: 'Hello World'
     })
 })



  ------------------------------------------------------- */
/*
const router = express.Router()

router.get('/', (req, res) => { res.send({ message: 'home page'  }) })
router.get('/path', (req, res) => { res.send({ message: 'Path page'  }) })
router.post('/', (req, res) => { res.send({ message: 'Post page'  }) })
router.put('/', (req, res) => { res.send({ message: 'Put page'  }) })
router.delete('/', (req, res) => { res.send({ message: 'Delete page' }) })


router.route('/')
    .get((req, res) => { res.send('get') })
    .post((req, res) => { res.send('post' ) })
    .put((req, res) => { res.send( 'put' ) })
    .delete((req, res) => { res.send('Delete') })



app.use(router)
------------------------------------------------------- */

//const router = require('./routes/')
//app.use(router)
//app.use(require('./routes/'))
app.use('/test' , require('./routes/'))

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
