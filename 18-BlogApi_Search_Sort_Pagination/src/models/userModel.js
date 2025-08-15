"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */



/*------------------------------------------------------- */
// CALL FROM PASSWORD ENCYPT

const passwordEncrypt = require('../helpers/passwordEncrypt')

/*------------------------------------------------------- */

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        /*
        validate: (email) => {
            if(email.includes('@') && email.includes('.')){
                return true
            }else{
                return false
            }
        }
            */
        //validate: (email) => (email.includes('@') && email.includes('.')) 
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect' 
        ]
        },

    password: {
        
        type: String,
        trim: true,
        required: true,
        // set: passwordEncrypt
        //set: (password) => {  return passwordEncrypt(password) }, // veri kaydederken, return edilen data kaydedilir 

        // Set methodu validate methodundan önce çalışır. Dolayısı ile validate datası her zaman aynı formattadır.
        // set: (password) => {
        //     if (password.length >= 8) {
        //         return passwordEncrypt(password)
        //     } else {
        //         return 'wrong'
        //     }
        // },
        // validate: (password) => {
        //     if (password == 'wrong') {
        //         return false
        //     } else {
        //         return true
        //     }
        // }, 
        set: (password) => (password.length >= 8 ?  passwordEncrypt(password) : 'wrong'),
        validate: (password) => (password != 'wrong') // Güncelleme yaparken default olarak validate çalışmaz. // { runValidators: true }

        // Guncelleme yaparken yani udate de validate metodu default olarak calismaz. Calismasi icin update metoduna validator yazmak gerekir
        
        
    },

    firstname: String,

    lastname: String



},
{
    collection: 'users',
    timestamps: true
}
)


// module.exports = mongoose.model('User', UserSchema)
   module.exports.User = mongoose.model('User', UserSchema)