const express = require('express');
const router = express.Router();

// Adding Models
const Tags = require('../../models/tagsModels');

router.delete('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const tag = await Tags.findById(_id);
        if (tag != null) {
            await Tags.findByIdAndDelete(_id);
            res.status(200).send(tag);
        } else {
            res.status(404).send('Requested Tag not found');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
