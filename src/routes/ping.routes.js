const router = require("express").Router();

router.get("/healthcheck", (req, res) => {
  res.json({ msg: "service is healthy" });
});

module.exports = router;