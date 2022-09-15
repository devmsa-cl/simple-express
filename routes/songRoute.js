const express = require('express');
const { songs } = require('../fakeData');

const router = express.Router();
router.route('/').get((req, res) => {
  res.status(200).send({ songs });
});
module.exports = router;
