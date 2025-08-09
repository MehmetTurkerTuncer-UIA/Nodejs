"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()
/*...................................................*/

// Call Cotrollers:
const {user} = require('../controllers/userController');
//const { User } = require('../models/userModel');
/*...................................................*/


// URL: /user ->


// user
router.route('/')
    .get(user.list)    
    .post(user.create)
    

router.route('/:userId')
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)


/*...................................................*/

module.exports = router 