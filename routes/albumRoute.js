const express = require('express');
const { albums } = require('../fakeData');
const router = express.Router();
router.route('/').get((req, res) => {
  res.status(200).json({ albums });
});

module.exports = router;
