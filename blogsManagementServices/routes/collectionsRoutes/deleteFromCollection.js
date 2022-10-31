const express = require('express');
const router = express.Router();

// Adding Models
const Collections = require('../../models/collectionsModels');

router.delete('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const itemToBeRemoved = req.body.blogId;
        if (itemToBeRemoved != null) {
            const collections = await Collections.findById(_id);
            if (collections != null) {
                let collectionList = collections.collectionList;
                const index = collectionList.indexOf(itemToBeRemoved);
                collectionList.splice(index, 1);

                if (index > -1) {
                    await Collections.findByIdAndUpdate(_id, { collectionList });
                    const updatedCollection = await Collections.findById(_id);
                    res.status(200).send(updatedCollection);
                } else {
                    res.status(406).send('Requested blog not found');
                }
            } else {
                res.status(404).send('Requested collection is missing');
            }
        } else {
            res.status(400).send('Requested parameters are missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
