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

    // FILTER //SEARCH   // SORDT  // PAGINATION

    // FILTER
    // URL?filter[fieldName]=value&filter[fieldName2]=value2
    const filter = req.query?.filter || {};
    //console.log(filter);

    // SEARCH
    // URL?search[fieldName]=value&search[fieldName2]=value2
    const search = req.query?.search || {};
    //console.log(search);
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/

    //console.log(key, search[key])
    for (let key in search) search[key] = { $regex: search[key] };
    //console.log(search);

    //SORT
    // URL?sort[fieldName]=аsc&sort[fieldName2]=desc
    const sort = req.query?.sort || {};
    //console.log(sort)

    // PAGINATION

    // URL?page=3&limit=15

    let limit = Number(req.query?.limit);
    limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20);
    console.log(limit);

    // PAGE
    let page = Number(req.query?.page);
    page = page > 0 ? page : 1;

    // SKIP
    let skip = Number(req.query?.skip);
    skip = skip > 0 ? skip : (page - 1) * limit;

    //const data = await BlogPost.find()
    //const data = await BlogPost.find({}, {categoryId: true, title: true, content: true})
    //const data = await BlogPost.find({}, {categoryId: 1, title: 1, content: 1}).populate('categoryId')
    //const data = await BlogPost.find().populate('categoryId')

    const data = await BlogPost.find({ ...filter, ...search })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate('categoryId');

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
