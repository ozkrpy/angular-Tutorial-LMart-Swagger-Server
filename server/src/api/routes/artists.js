const express = require('express');
const artists = require('../services/artists');

const router = new express.Router();


/**
 * Returns a list of artists
 */
router.get('/', async (req, res, next) => {
  const options = {
    limit: req.query['limit'],
    offset: req.query['offset']
  };

  try {
    const result = await artists.getArtists(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Lets a user post a new artist
 */
router.post('/', async (req, res, next) => {
  const options = {
    body: req.body
  };

  try {
    const result = await artists.postArtists(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Obtain information about an artist from his or her unique 
 * username
 */
router.get('/:username', async (req, res, next) => {
  const options = {
    username: req.params['username']
  };

  try {
    const result = await artists.getArtistsByUsername(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
