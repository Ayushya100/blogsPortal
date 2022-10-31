const express = require('express');
const router = express.Router();

// Adding Models
const Tags = require('../../models/tagsModels');

router.put('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const tag = await Tags.findById(_id);
        if (tag != null) {
            await Tags.findByIdAndUpdate(_id, { isValidated: true });
            const updatedTag = await Tags.findById(_id);
            res.status(202).send(updatedTag);
        } else {
            res.status(404).send('Requested Tag not found');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
