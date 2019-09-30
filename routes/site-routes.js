const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(req.session)
  res.render("home");
});

module.exports = router;