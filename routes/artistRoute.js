const express = require('express');
const { artists } = require('../fakeData');
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ artists: artists });
});

module.exports = router;
