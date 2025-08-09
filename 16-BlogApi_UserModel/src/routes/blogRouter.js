"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()
/*...................................................*/

// Call Cotrollers:
const {blogCategory, blogPost} = require('../controllers/blogController')


// URL: /blog ->


// BlogCategory
router.route('/category')
    .get(blogCategory.list)    
    .post(blogCategory.create)
    

router.route('/category/:categoryId')
    .get(blogCategory.read)
    .put(blogCategory.update)
    .patch(blogCategory.update)






/*...................................................*/
module.exports = router 



