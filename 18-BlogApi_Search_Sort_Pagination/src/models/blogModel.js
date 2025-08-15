"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Blog models
const mongoose = require("mongoose");
/*

// const ModelName = new mongoose.Schema({...fields}, {...sttings})
const ModelName = new mongoose.Schema(
  {
    //_id tanimlamaya gerek yoktur

    fieldNme: {
      type: String,
      default: null,
      trim: true, // basindaki ve sonundaki bosluklari kirpar
      unique: true,
      index: true, // aramalarda hizli erisim istiyorsam index true derim
      required: true, // veri gonderimi zorunlu mu
      required: [true, "Bu data mutlaka gonderilmeli"],
      //enum: [1,2,3]
      //enum: ['1','2','3']  // belirli degerlerden biri olmak zorunda
      enum: [["1", "2", "3"], "bu degerlerden biri olmak zorunda"],
      //validate: (data) => true,  //gelen data formatini kontrol etme
      validate: [
        (data) => {
          return true;
        },
        "gonderilen data formati yanlistir",
      ], //gelen data formatini kontrol etme
      get: (data) => data, // Bu field e erisilmek istenildiginde otomatik calisan fonksiyon
      set: (data) => data, // Bu field e veri kaydedildilmek istendiginde otomatik calisan fonksiyon
    },
  },
  {
    collection: "TableName",
    timestamps: true, // creatAt ve updateAt otomatik yonetilir
  }
);


const Model = mongoose.model('ModelName', ModelSchema)

------------------------------------------------------- */
// BlogCategory Model

const BlogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategory",
    timestamps: true, // creatAt ve updateAt otomatik yonetilir
  }
);

// const BlogCategory = mongoose.model("BlogCategory", BlogCategorySchema);

const BlogPostSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
      // uniqe: true // define uniqe for one to one relations 
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },

    content: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogPosts",
    timestamps: true, // creatAt ve updateAt otomatik yonetilir
  }
);

// const BlogPost = mongoose.model("blogPost", BlogPostSchema);

/*------------------------------------------------------- */

module.exports = {
  //  BlogCategory: BlogCategory,
  BlogCategory: mongoose.model("BlogCategory", BlogCategorySchema),
  //  BlogPost: BlogPost
  BlogPost: mongoose.model("BlogPost", BlogPostSchema),
};

/*------------------------------------------------------- */
