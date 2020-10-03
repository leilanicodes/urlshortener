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
    let randomStr = Math.random().toString(32).substring(2, 5);
    const newUrl = await Url.create({
      original_url: req.body.original_url,
      short_url: randomStr,
    });
    res.status(201).json(newUrl);
    res.json(url);
  } catch (err) {
    next(err);
  }
});

router.get('/:short_url', async (req, res, next) => {
  try {
    console.log(req.params.short_url);
    // res.status(201).send('test');
    const url = await Url.findOne({
      where: { short_url: req.params.short_url },
    });
    if (!url) return res.sendStatus(404);
    console.log(url);
    console.log(url.original_url);
    res.redirect(url.original_url);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
