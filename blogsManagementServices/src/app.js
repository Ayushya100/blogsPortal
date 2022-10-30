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

app.use(`${blogsApi}/createBlogs`, createBlogs);
app.use(`${blogsApi}/getAllBlogs`, getAllBlogs);

app.listen(port, () => {
    console.log(`Connection has been started at port: ${port}`);
});

module.exports = app;
