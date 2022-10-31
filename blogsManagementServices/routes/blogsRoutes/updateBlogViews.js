const express = require('express');
const router = express.Router();

// Adding Models
const Blogs = require('../../models/blogsModels');
const infoToDisplay = 'title img overview version views tags createdAt updatedAt authorId';

router.put('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const blog = await Blogs.findById(_id);
        if (blog != null) {
            await Blogs.findByIdAndUpdate(_id, {'views': blog.views + 1});
            const updatedBlog = await Blogs.findById(_id);
            res.status(202).send(updatedBlog);
        } else {
            res.status(404).send('Requested blog not found');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
