"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { BlogCategory, BlogPost } = require("../models/blogModel");

module.exports.blogCategory = {
  list: async (req, res) => {
    const data = await BlogCategory.find();

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await BlogCategory.findOne({ _id: req.params.categoryId });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await BlogCategory.updateOne(
      { _id: req.params.categoryId },
      req.body
    );

    res.status(202).send({
      error: false,
      result: data,
      new: await BlogCategory.findOne({ _id: req.params.categoryId }),
    });
  },

  create: async (req, res) => {
    // res.send('create method')

    const data = await BlogCategory.create(req.body);
    //console.log(data)

    res.status(201).send({
      error: false,
      result: data,
    });
  },

  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.categoryId });
    console.log(data);

    /*
        res.status(204).send( {
            error: false,
            result: data
            
        })
*/
    if (data.deleteCount >= 1) {
      res.sendStatus(204);
      // error: false
    } else {
      res.errorStatusCode = 404;
      throw new Error("Not Found");
      // error : true
    }
  },
};

module.exports.blogPost = {
  list: async (req, res) => {
    //console.log(req.query);

    
    res.status(200).send({
      error: false,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await BlogPost.findOne({ _id: req.params.postId });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body);

    res.status(202).send({
      error: false,
      result: data,
      new: await BlogPost.findOne({ _id: req.params.postId }),
    });
  },

  create: async (req, res) => {
    // res.send('create method')
    req.body.userId = req.user?.id;

    req.body.content += ` Author: ${req.user?.firstname} ${req.user?.lastName}`;

    const data = await BlogPost.create(req.body);
    //console.log(data)

    res.status(201).send({
      error: false,
      result: data,
    });
  },

  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });
    console.log(data);

    /*
        res.status(204).send( {
            error: false,
            result: data
            
        })
*/
    if (data.deleteCount >= 1) {
      res.sendStatus(204);
      // error: false
    } else {
      res.errorStatusCode = 404;
      throw new Error("Not Found");
      // error : true
    }
  },
};
