"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */


// Password Encrypt (PBKDF2 Method):
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest

const crypto = require('node:crypto')

const keyCode = process.env.SECRET_KEY  // sifreleme anahtari
const loopCount = 10000 // dongu sayisi
const charCount = 32  // 64 karakteloik geri donus icin 32 yaz
const encType = 'sha512'  // sifreleme algoritmasi

module.exports = function (password) {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}

