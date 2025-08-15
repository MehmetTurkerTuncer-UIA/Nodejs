"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const {User}  = require ('./src/models/userModel')

const {BlogCategory, BlogPost} = require ('./src/models/blogModel')

/* ------------------------------------------------------- */

module.exports = async () => {


    // Deleted ALL RECORDS
    await User.deleteMany().then(() => console.log('  -- User Dleted All'))
    await BlogCategory.deleteMany().then(() => console.log('-- BlogCategory deleted All'))
    await BlogPost.deleteMany().then(() => console.log('-- BlogPost deleted All'))
   
    // Example user
    const user = await User.create({

       email: "test@test.com",
       password: "12345678",
       firstName: "Test",
       lastName: "Test" 
    })

    // Example Category:
    const blogCategory = await BlogCategory.create({

        name: "Test Category"

    })

    // Example Posts
    for( let key in [...Array(200)]){

        await BlogPost.create({
            userId: user._id,
            categoryId: blogCategory._id,
            title: `tets ${key} title`,
            content: `test ${key} content`,
            published: Boolean(key%2)
        })

    }

    console.log('islem Bitti')
}


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
