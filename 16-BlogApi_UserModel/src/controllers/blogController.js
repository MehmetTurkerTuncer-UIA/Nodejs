"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const {BlogCategory, BlogPost} = require('../models/blogModel')


module.exports.blogCategory = {

    list: async (req, res) => {

        const data = await BlogCategory.find()

        res.status(200).send({
            error: false,
            result: data
        })


    },

    read: async (req, res) => {

        const data = await BlogCategory.findOne({_id: req.params.categoryId})

        res.status(200).send({
            error:false,
            result: data
        })

    },
    
    update: async (req, res) => {

        const data = await BlogCategory.updateOne({_id: req.params.categoryId}, req.body)

        res.status(200).send( {
            error: false,
            result: data
        })
    },


    create: async ( req, res) =>{

        // res.send('create method')

        const data = await BlogCategory.create(req.body)
        //console.log(data)

        res.status(201).send({
            error:false,
            result: data
        })

    }
    
}

module.exports.blogPost = {



}