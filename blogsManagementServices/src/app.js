const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

// Adding Middlewares - Cors
app.use(cors());
app.use(bodyparser.json());

// Adding required connection
require('../connections/dbConnection');

// Port No and API
const port = process.env.port || 3000;
const blogsApi = '/api/v1/blogs';
const tagsApi = '/api/v1/tags';
const collectionsApi = '/api/v1/collections';

// Routes
const createBlogs = require('../routes/blogsRoutes/createBlog');
const getAllBlogs = require('../routes/blogsRoutes/getAllBlogs');
const getBlogsById = require('../routes/blogsRoutes/getBlogsById');
const updateBlogs = require('../routes/blogsRoutes/updateBlog');
const deleteBlogs = require('../routes/blogsRoutes/deleteBlog');
const updateBlogViews = require('../routes/blogsRoutes/updateBlogViews');
const createTags = require('../routes/tagsRoutes/createTag');
const getAllTags = require('../routes/tagsRoutes/getAllTags');

app.use(`${blogsApi}/createBlogs`, createBlogs);
app.use(`${blogsApi}/getAllBlogs`, getAllBlogs);
app.use(`${blogsApi}/getBlogsById`, getBlogsById);
app.use(`${blogsApi}/updateBlogs`, updateBlogs);
app.use(`${blogsApi}/deleteBlogs`, deleteBlogs);
app.use(`${blogsApi}/updateBlogViews`, updateBlogViews);
app.use(`${tagsApi}/createTags`, createTags);
app.use(`${tagsApi}/getAllTags`, getAllTags);

app.listen(port, () => {
    console.log(`Connection has been started at port: ${port}`);
});

module.exports = app;
