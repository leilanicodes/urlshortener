const router = require('express').Router();
const { Url } = require('../db/models');
module.exports = router;

//posts a new url or returns existing url
router.post('/new', async (req, res, next) => {
  try {
    // makes random 3 char string
    let randomStr = Math.random().toString(32).substring(2, 5);

    // checks if there's an existing url
    const existingUrl = await Url.findOne({
      where: { original_url: req.body.original_url },
    });

    //if no existing url, create a new entry
    if (!existingUrl) {
      const newUrl = await Url.create({
        original_url: req.body.original_url,
        short_url: randomStr,
      });

      // returns newUrl
      res.status(201).json(newUrl);
    }
    //returns existingUrl
    res.status(201).json(existingUrl);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//returns the number of urls in db
router.get('/count', async (req, res, next) => {
  console.log('getting count');
  try {
    const urlCount = await Url.count();

    res.status(201).json(urlCount);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// finds a short url and redirects to original url
router.get('/:short_url', async (req, res, next) => {
  try {
    const url = await Url.findOne({
      where: { short_url: req.params.short_url },
    });

    if (!url) return res.sendStatus(404);

    res.redirect(url.original_url);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
