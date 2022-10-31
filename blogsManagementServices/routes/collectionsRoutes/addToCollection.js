const express = require('express');
const router =  express.Router();

// Adding Models
const Collections = require('../../models/collectionsModels');

router.put('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const blogId = req.body.blogId;
        if (blogId != null) {
            const collection = await Collections.findById(_id);
            if (collection != null) {
                let collectionList = collection.collectionList;
                collectionList.push(blogId);
                await Collections.findByIdAndUpdate(_id, {collectionList});
                const updateCollection = await Collections.findById(_id);
                res.status(201).send(updateCollection);
            } else {
                res.status(404).send('Requested Collection not found');
            }
        } else {
            res.status(400).send('Required parameters are missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
