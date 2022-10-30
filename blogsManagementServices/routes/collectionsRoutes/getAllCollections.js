const express = require('express');
const router = express.Router();

// Adding Models
const Collections = require('../../models/collectionsModels');
const infoToDisplay = 'title overview tags createdAt views';

router.get('/', async(req, res) => {
    try {
        const allCollections = await Collections.find({}, infoToDisplay);
        res.status(200).send(allCollections);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
