const express = require('express');
const router = express.Router();

// Adding Models
const Blogs = require('../../models/blogsModels');
const infoToDisplay = 'title img overview version views tags createdAt updatedAt authorId';

router.get('/', async(req, res) => {
    try {
        const allBlogs = await Blogs.find({}, infoToDisplay);
        res.status(200).send(allBlogs);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
