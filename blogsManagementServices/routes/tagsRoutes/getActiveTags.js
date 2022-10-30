const express = require('express');
const router = express.Router();

// Adding Models
const Tags = require('../../models/tagsModels');

router.get('/', async(req, res) => {
    try {
        const allTags = await Tags.find();
        const activeTags = allTags.filter(result => {
            return result.isValidated === true;
        });
        res.status(200).send(activeTags);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
