"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
//const User = require('../models/userModel')   // direct gonderildiyse bu sekilde object icinde gonderildiye asagidaki sekilde reqired yapilir
const { User } = require("../models/userModel");

const passwordEncrypt = require("../helpers/passwordEncrypt");

/*...................................*/
// Auth Controller:

module.exports.auth = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      // const user = await User.findOne({email: email})
      const user = await User.findOne({ email });

      if (user) {
        //USER TAMAMDIR

        if (user.password == passwordEncrypt(password)) {
          // password: tamamdir
          /* SESSION */

          /*
                    req.session ={
                        email: user.email,
                        password: user.password
                    } 
                    */
          req.session._id = user._id;
          req.session.password = user.password;

          
          /*........................................*/
         // COOKIE

         if (req.body?.remindMe == true){
            req.session.remindMe = true

            // Set MaxAge: // 3 days
            req.sessionOptions.maxAge = 1000 * 60 *60 *24 * 3 


         }

          
          res.status(200).send({
            error: false,
            message: "Login is successful",
            user,
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("Password or email are not true");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("This user not found");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and password are required");
    }
  },

  logout: async (req, res) => {
    // Session / Cookie datasini silmek icin bu islem yapilir

    req.session = null;

    res.status(200).send({
      error: false,
      message: "Logout: OK",
    });
  },
};

/*...................................*/
/*...................................*/
/*...................................*/
