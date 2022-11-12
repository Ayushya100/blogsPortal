const express = require('express');
const router = express.Router();

// Adding Models
const Blogs = require('../../models/blogsModels');
const infoToDisplay = 'title img overview content version views likes tags createdAt updatedAt authorId';

router.get('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const blog = await Blogs.findById(_id, infoToDisplay);

        if (!blog) {
            res.status(404).send('Blog not found');
        } else {
            res.status(200).send(blog);
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
