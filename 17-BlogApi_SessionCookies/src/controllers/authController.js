"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
//const User = require('../models/userModel')   // direct gonderildiyse bu sekilde object icinde gonderildiye asagidaki sekilde reqired yapilir
const {User} = require('../models/userModel')

const passwordEncrypt = require('../helpers/passwordEncrypt')

/*...................................*/
// Auth Controller:

module.exports.auth = {

    login: async (req, res) => {

        const {email, password} = req.body

        if( email && password) {

            // const user = await User.findOne({email: email})
            const user = await User.findOne({email})
            
            if(user){
                //USER TAMAMDIR 

                if(user.password == passwordEncrypt(password)){

                    // password: tamamdir
                    res.send({
                        message: 'Login is successfull'
                    })

                }else{
                    res.errorStatusCode = 401
                    throw new Error('Password or email are not true')

                }


            }else{
                res.errorStatusCode = 401
                throw new Error('This user not found')

            }
            
            
        } else {
            res.errorStatusCode = 401
            throw new Error('Email and password are required')
        }


    },

    logout: async (req, res ) => {



    }


}






/*...................................*/
/*...................................*/
/*...................................*/