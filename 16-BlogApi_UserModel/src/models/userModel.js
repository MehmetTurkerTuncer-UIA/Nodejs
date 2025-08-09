"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },

    password: {
        
        type: String,
        trim: true,
        required: true

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