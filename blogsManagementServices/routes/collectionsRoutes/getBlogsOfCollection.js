const express = require('express');
const router = express.Router();

// Adding Models
const Collections = require('../../models/collectionsModels');
const Blogs = require('../../models/blogsModels');

router.get('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const collections = await Collections.findById(_id);
        if (collections != null) {
            const collectionList = collections.collectionList;
            let result = [];
            for (let index = 0; index < collectionList.length; index++) {
                const blog = await Blogs.findById(collectionList[index]);
                result.push(blog);
            }
            res.status(200).send(result);
        } else {
            res.status(404).send('Requested Collection not found');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
