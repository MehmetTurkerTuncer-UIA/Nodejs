"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */


// SEQUELIZE:
// $ npm i sequelize sqlite3

const { Sequelize, DataTypes, where } = require('sequelize')

// Connection Object:
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

// Sequelize Model:

// sequelize.define('tableName', {columns})



const Todo = sequelize.define('todos', {
    // id isimli bir field olusturmaya gerek yoktur
/* ------------------------------------------------------- 

    id: {
        type: DataTypes.INTEGER,  // DataType // sutun veri tipi
        allowNull: false, // default: true // sutun verisi bos olabilir mi?
        unique: true, // default : false // benzersiz kayit mi?
        comment: 'YORUM EKLEYEBILIRIZ',
        primaryKey: true,
        autoIncrement: true, // default: false // sutun degeri her bir kayitta otomatik olarak +1 artsin mi?,
        field: 'custom_field_name'
    }
*/
    title: {
        type: DataTypes.STRING(256), // VARCHAR(256)
        allowNull: false
    },

    description: DataTypes.TEXT,

    priority: { 
        type : DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0

    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

  
})


//Syncronization:
// Modelleri veri tabanina uygulama islemi

//sequelize.sync()
//sequelize.sync({force: true})  // tabloyu siler tekrardan olusturur, tabloda veri varsa kaybolur
//sequelize.sync({alter: true})   // tablonun backup ini alir, tabloyu siler tekrardan olusturur


sequelize.authenticate()
    .then(() => console.log(' DB connected'))
    .catch(() => console.log(' DB not connected'))

module.exports = Todo