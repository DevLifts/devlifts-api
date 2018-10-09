const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(req);
  console.log(next);
  res.send('respond with a resource');
});

module.exports = router;
