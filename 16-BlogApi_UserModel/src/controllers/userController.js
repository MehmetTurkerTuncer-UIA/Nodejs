"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
//const User = require('../models/userModel')   // direct gonderildiyse bu sekilde object icinde gonderildiye asagidaki sekilde reqired yapilir
const {User} = require('../models/userModel')


module.exports.user = {

    list: async (req, res) => {

        const data = await User.find()

        res.status(200).send({
            error: false,
            result: data
        })


    },

    read: async (req, res) => {

        const data = await User.findOne({_id: req.params.userId})

        res.status(200).send({
            error:false,
            result: data
        })

    },
    
    update: async (req, res) => {

        const data = await User.updateOne({_id: req.params.userId}, req.body)

        res.status(202).send( {
            error: false,
            result: data,
            new: await User.findOne({ _id: req.params.userId })

        })
    },


    create: async ( req, res) =>{

        // res.send('create method')

        const data = await User.create(req.body)
        //console.log(data)

        res.status(201).send({
            error:false,
            result: data
        })

    },

    delete: async (req, res) => {

        const data = await User.deleteOne({_id: req.params.userId})
        console.log(data)

        /*
        res.status(204).send( {
            error: false,
            result: data
            
        })
*/
        if(data.deleteCount >= 1){
            res.sendStatus(204)
            // error: false

        } else {

            res.errorStatusCode = 404
            throw new Error('Not Found')
            // error : true
        }
    } 
    
}
