'use strict'

// const express = require('express')

const router = require('express').Router()
/*
router.get('/', (req, res) => { res.send({ message: 'home page'  }) })
router.get('/path', (req, res) => { res.send({ message: 'Path page'  }) })
router.post('/', (req, res) => { res.send({ message: 'Post page'  }) })
router.put('/', (req, res) => { res.send({ message: 'Put page'  }) })
router.delete('/', (req, res) => { res.send({ message: 'Delete page' }) })

------------------------------------------------------- */

router.route('/')
    .get((req, res) => { res.send('get') })
    .post((req, res) => { res.send('post' ) })
    .put((req, res) => { res.send( 'put' ) })
    .delete((req, res) => { res.send('Delete') })



module.exports = router

