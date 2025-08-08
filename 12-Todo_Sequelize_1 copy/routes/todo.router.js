"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

//const router = express.Router()  // BU CALISMAZ EXPRESS I REQUIRE ETMEMIZ GEREKIR
const router = require("express").Router();

const todo = require("../app/controllers/todo.controller");

// DELETE DATA

/*
router.delete("/:id", todo.delete);

// UPDATE DATA
router.put("/:id", todo.update);

// TEK BIR DATA ALMA

router.get("/:id", todo.read );

// LIST TODOS:

router.get("/", todo.list);

// CREATER TODO

router.post("/", todo.create);

------------------------------------*/

/*------------------------------------*/

router.route('/')
    .get(todo.list)
    .post(todo.create)

router.route('/:id')
    .get(todo.read)
    .put(todo.update)
    .delete(todo.delete)


module.exports = router;
