"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

module.exports = async (req, res, next) => {
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
  /*
  const data = await BlogPost.find({ ...filter, ...search })
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .populate("categoryId");
*/

  // GetModeLList
  res.getModelList = async function (Model, populate = null) {
    return await Model.find({ ...filter, ...search })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  };

  res.getModelListDetails = async function (Model) {
    const data = await Model.find({ ...filter, ...search });

    let details = {
      filter,
      search,
      sort,
      skip,
      limit,
      page,
      pages: {
        previous: page > 1 ? page - 1 : false,
        current: page,
        next: page + 1,
        total: Math.ceil(data.length / limit),
      },
      totalRecords: data.length,
    };

    if (details.pages.next > details.pages.total) details.pages.next = false;
    if (details.totalRecords <= limit) details.pages = false;

    return details;
  };

  next();
};
