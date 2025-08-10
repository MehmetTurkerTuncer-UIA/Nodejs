"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()
/*...................................................*/

// Call Cotrollers:
const { auth } = require('../controllers/authController');
//const { auth } = require('../models/userModel');
/*...................................................*/


// URL: /auth ->


// user
router.route('/')
    .get(auth.list)    
    .post(auth.create)
    

router.route('/:userId')
    .get(auth.read)
    .put(auth.update)
    .patch(auth.update)
    .delete(auth.delete)


/*...................................................*/

module.exports = router 