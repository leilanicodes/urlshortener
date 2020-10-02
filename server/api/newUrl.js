const router = require('express').Router();
const { Url } = require('../db/models');
module.exports = router;

// router.get('/', async (req, res, next) => {
//   try {
//     const url = await Url.findAll();
//     res.json(url);
//   } catch (err) {
//     next(err);
//   }
// });

router.post('/', async (req, res, next) => {
  try {
    console.log('posting');
    console.log('req.body', req.body);
    const newUrl = await Url.create({ url: req.body.url });
    res.status(201).json(newUrl);
    res.json(url);
  } catch (err) {
    next(err);
  }
});
