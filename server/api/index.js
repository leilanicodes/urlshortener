const router = require('express').Router();
module.exports = router;

router.use('/', require('./newUrl'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
