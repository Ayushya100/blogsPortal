const express = require('express');
const router = express.Router();

// Adding Models
const User = require('../../models/userInfoModels');

router.put('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const blogId = req.body.blogs[0];
        if (blogId != null) {
            const user = await User.findById(_id);
            if (user != null) {
                const blogsCount = user.blogsCount - 1;
                let blogsList = user.blogsList;
                let index = blogsList.indexOf(blogId);
                if (index > -1) {
                    blogsList.splice(index, 1);
                }
                await User.findByIdAndUpdate(_id, {blogsCount, blogsList});
                res.status(201).send(user);
            } else {
                res.status(404).send('Requested user not found');
            }
        } else {
            res.status(400).send('Request body is missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
