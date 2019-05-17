const express = require('express');
const users = require('../services/users');

const router = new express.Router();


/**
 * Searches and returns 'User' objects.
 * 
 * Optional query params determines values of returned array
 * 
 */
router.get('/', async (req, res, next) => {
  const options = {
    search: req.query['search'],
    offset: req.query['offset'],
    limit: req.query['limit']
  };

  try {
    const result = await users.getUsers(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;
