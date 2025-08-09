"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */



/*------------------------------------------------------- */

// Password Encrypt (PBKDF2 Method):
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest

const crypto = require('node:crypto')

const keyCode = process.env.SECRET_KEY  // sifreleme anahtari
const loopCount = 10000 // dongu sayisi
const charCount = 32  // 64 karakteloik geri donus icin 32 yaz
const encType = 'sha512'  // sifreleme algoritmasi

const passwordEncrypt = function (password) {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}

/*------------------------------------------------------- */

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: () => {
            if(email.includes('@') && email.includes('.')){
                return true
            }else{
                return false
            }
        }
    },

    password: {
        
        type: String,
        trim: true,
        required: true,
        // set: passwordEncrypt
        set: (password) => { 
            return passwordEncrypt(password) } // veri kaydederken, return edilen data kaydedilir 

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