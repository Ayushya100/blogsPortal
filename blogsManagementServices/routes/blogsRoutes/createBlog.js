const express = require('express');
const router = express.Router();

// Adding Models
const Blogs = require('../../models/blogsModels');

router.post('/', async(req, res) => {
    try {
        const title = req.body.title;
        const overview = req.body.overview;
        const content = req.body.content;
        const tags = req.body.tags;
        const authorId = req.body.authorId;
        if ((title != null) && (overview != null) && (content != null) && (tags != null) && (authorId != null)) {
            const blogs = new Blogs(req.body);
            const createBlogs = await blogs.save();
            res.status(201).send(createBlogs);
        } else {
            res.status(400).send('Request body is missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
