const router = require('express').Router();
const mongosse = require('mongoose');
const { $where } = require('../models/client');

const Collection = require('../models/Collection');

router.post('/', (req, res) => {
    const collection = new Collection({
        collection_name: req.body.collection_name,
        icon: req.body.icon,
        client_id: req.body.client_id,
    });

    collection.save((err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Collection created!' });
    });
});


//get all collections
router.get('/', async (req, res) => {

    const collections = await Collection.aggregate([
        {
            $lookup: {
                from: 'clients',
                localField: 'client_id',
                foreignField: '_id',
                as: 'client'
            }
        },
        {
            $unwind: '$client'
        },
    ]);

    res.json(collections);
});


//get collection by client_id using aggregation lookup
router.get('/:client_id', async (req, res) => {

    const collections = await Collection.aggregate([
        {
            $match: {
                client_id: mongosse.Types.ObjectId(req.params.client_id)
            },
        },
        {
            $lookup: {
                from: 'clients',
                localField: 'client_id',
                foreignField: '_id',
                as: 'client'
            },
        },
        {
            $unwind: '$client'
        },
    ]);




    res.json(collections);
});



module.exports = router;
