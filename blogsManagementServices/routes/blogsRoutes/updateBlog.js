const express = require('express');
const router = express.Router();

// Adding Models
const Blogs = require('../../models/blogsModels');
const infoToDisplay = 'title img overview content version views tags createdAt updatedAt authorId';

router.put('/:id/:typeOfUpdate', async(req, res) => {
    try {
        const _id = req.params.id;
        const typeOfUpdate = req.params.typeOfUpdate;
        if ((Object.keys(req.body).length != 0) || (typeOfUpdate != null)) {
            const blog = await Blogs.findById(_id);
            if (blog != null) {
                const currentVersion = blog.version.split('v');
                let newVersion = currentVersion[1];
                if (typeOfUpdate == 'major') {
                    newVersion = parseInt(newVersion) + 1.0;
                } else if (typeOfUpdate == 'minor') {
                    newVersion = parseFloat(newVersion) + 0.1;
                }
                req.body.version = 'v' + parseFloat(newVersion).toFixed(1);
                await Blogs.findByIdAndUpdate(_id, req.body);
                const updatedBlog = await Blogs.findById(_id, infoToDisplay);
                res.status(201).send(updatedBlog);
            } else {
                res.status(404).send('Requested blog not found');
            }
        } else {
            res.status(400).send('Required parameters are missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
