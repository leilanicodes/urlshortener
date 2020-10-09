const router = require('express').Router();
const { Url } = require('../db/models');
module.exports = router;

router.post('/new', async (req, res, next) => {
  try {
    let randomStr = Math.random().toString(32).substring(2, 5);
    const existingUrl = await Url.findOne({
      where: { original_url: req.body.original_url },
    });
    if (!existingUrl) {
      const newUrl = await Url.create({
        original_url: req.body.original_url,
        short_url: randomStr,
      });
      res.status(201).json(newUrl);
    }
    res.status(201).json(existingUrl);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/count', async (req, res, next) => {
  console.log('getting count');
  try {
    const urlCount = await Url.count();
    console.log('urlCount', urlCount);
    res.status(201).json(urlCount);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/:short_url', async (req, res, next) => {
  try {
    console.log(req.params.short_url);
    console.log('short url');

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
