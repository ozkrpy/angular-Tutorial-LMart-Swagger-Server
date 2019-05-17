const express = require('express');
const user = require('../services/user');

const router = new express.Router();


/**
 * Gets a 'User' object by id
 */
router.get('/:id', async(req, res, next) => {
    const options = {
        id: req.params['id']
    };

    try {
        const result = await user.getUserById(options);
        res.status(result.status || 200).send(result.data);
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
});

/**
 * Updates a 'User' object given id
 */
router.put('/:id', async(req, res, next) => {
    const options = {
        id: req.params['id'],
        userData: req.query['userData']
    };

    try {
        const result = await user.putUserById(options);
        res.status(result.status || 200).send(result.data);
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
});

module.exports = router;