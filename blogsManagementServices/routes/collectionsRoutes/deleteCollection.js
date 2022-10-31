const express = require('express');
const router = express.Router();

// Adding Models
const Collections = require('../../models/collectionsModels');

router.delete('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const collection = await Collections.findById(_id);
        if (collection != null) {
            const deletedCollection = await Collections.findByIdAndDelete(_id);
            res.status(200).send(deletedCollection);
        } else {
            res.status(404).send('Requested collection not found');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
