"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8001;

/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json())

// AsyncErrors to errorHandler:
require('express-async-errors')
/* ------------------------------------------------------- 

 app.all('/', (req, res) => {
     res.send('WELCOME TO TODO API')
 })
*/
/* ------------------------------------------------------- */
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


/*------------------------------------------------*/

const router = express.Router()

// DELETE DATA

router.delete('/:id', async (req , res) => {

    const data = await Todo.destroy({where: { id: req.params.id}})

/*------------------------------------------------
        
    res.status(204).send({
        error: false,
        result: data ,
        message: (data>=1? 'deleted' : 'Can not deleted'),
      
    })
*/

if(data >=1 ){
    res.status(204).send({
        error: false,
        result: data ,
        message: 'deleted' 
      
    })
}else{

    /*------------------------------------------------

    res.status(200).send({
        error: false,
        result: data ,
        message: 'can not deleted' 
      
    })
        */
    // Send to ErrorHandler
    res.errorStatusCode = 404
    throw new Error('Can not Deleted.')

}


})


// UPDATE DATA
router.put('/:id', async (req, res) => {
    
    
    //  const data = await Todo.update({...newData}, {...filter}) 
    const data = await Todo.update(req.body, {where: { id: req.params.id}})
    console.log(data)

    res.status(201).send({
        error: false,
        result: data ,
        message: (data[0]>=1? 'Updated' : 'Can not updated'),
        new: await Todo.findByPk(req.params.id) // Guncel kaydi goster
    })

})

// TEK BIR DATA ALMA

router.get('/:id', async (req, res) => {

    //const data = await Todo.findOne({where: {id: req.params.id}})
    const data = await Todo.findByPk(req.params.id)

    res.status(200).send({
        error: false,
        result: data
    })

})

// LIST TODOS:

router.get('/', async (req, res) => {
    
    //const data = await Todo.findAll()
    const data = await Todo.findAndCountAll()
    res.status(200).send({

        error: false,
        result: data

    })

})

// CREATER TODO

router.post('/', async (req, res) => {

    /*------------------------------------------------

    const receivedData = req.body
    console.log(receivedData)

    const data = await Todo.create({
        title: receivedData.title,
        description: receivedData.description,
        priority: receivedData.priority,
        isDone: receivedData.isDone

    })

    //console.log(data)
*/
    const data = await Todo.create(req.body)

    res.status(201).send({
        error: false,
        result: data.dataValues
    })
})

/*------------------------------------------------*/
/*------------------------------------------------*/
/*------------------------------------------------*/




const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}

app.use(router)
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));