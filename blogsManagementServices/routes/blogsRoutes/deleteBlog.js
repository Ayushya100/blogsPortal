const express = require('express');
const router = express.Router();

// Adding Models
const Blog = require('../../models/blogsModels');

router.delete('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const blog = await Blog.findById(_id);
        if (blog != null) {
            await Blog.findByIdAndDelete(_id);
            res.status(200).send(blog);
        } else {
            res.status(404).send('Requested blog not found');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
