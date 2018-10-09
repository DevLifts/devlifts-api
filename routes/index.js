const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(req);
  console.log(next);
  res.render('index', { title: 'Express' });
});
module.exports = router;
