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
router.post('/login', auth.login )
router.post('/logout', auth.logout )
 



/*...................................................*/

module.exports = router 