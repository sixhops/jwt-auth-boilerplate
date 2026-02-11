const express = require('express');
const router = express.Router();

router.get("/test", (req, res) => {
  console.log("request: " + req);
  res.send("You have accessed the protected route");
});

module.exports = router;
