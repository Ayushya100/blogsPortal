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
const getActiveTags = require('../routes/tagsRoutes/getActiveTags');
const deleteTags = require('../routes/tagsRoutes/deleteTag');
const activateTags = require('../routes/tagsRoutes/activateTag');
const deactivateTags = require('../routes/tagsRoutes/deactivateTag');
const createCollections = require('../routes/collectionsRoutes/createCollection');
const getAllCollections = require('../routes/collectionsRoutes/getAllCollections');
const getBlogsOfCollections = require('../routes/collectionsRoutes/getBlogsOfCollection');
const updateCollections = require('../routes/collectionsRoutes/updateCollection');

app.use(`${blogsApi}/createBlogs`, createBlogs);
app.use(`${blogsApi}/getAllBlogs`, getAllBlogs);
app.use(`${blogsApi}/getBlogsById`, getBlogsById);
app.use(`${blogsApi}/updateBlogs`, updateBlogs);
app.use(`${blogsApi}/deleteBlogs`, deleteBlogs);
app.use(`${blogsApi}/updateBlogViews`, updateBlogViews);
app.use(`${tagsApi}/createTags`, createTags);
app.use(`${tagsApi}/getAllTags`, getAllTags);
app.use(`${tagsApi}/getActiveTags`, getActiveTags);
app.use(`${tagsApi}/deleteTags`, deleteTags);
app.use(`${tagsApi}/activateTags`, activateTags);
app.use(`${tagsApi}/deactivateTags`, deactivateTags);
app.use(`${collectionsApi}/createCollections`, createCollections);
app.use(`${collectionsApi}/getAllCollections`, getAllCollections);
app.use(`${collectionsApi}/getBlogsOfCollections`, getBlogsOfCollections);
app.use(`${collectionsApi}/updateCollections`, updateCollections);

app.listen(port, () => {
    console.log(`Connection has been started at port: ${port}`);
});

module.exports = app;
