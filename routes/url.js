const express = require("express");
const router = express.Router();
const ShortUrl = require("../models/shortUrl");

router.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
});
router.get("/:shortUrl", async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if (shortUrl) {
      res.redirect(shortUrl.full);
    } else {
      return res.sendStatus(404);
    }
    shortUrl.save();
  } catch (err) {
    console.log(err);
  }
});

router.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl, name: req.body.name });
  ShortUrl.data;
  res.redirect("/");
});

module.exports = router;
