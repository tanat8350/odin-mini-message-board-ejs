const express = require("express");
const router = express.Router();

const messages = require("../utils/messages");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/message/:id", function (req, res, next) {
  res.render("detail", {
    title: "Message detail",
    message: messages[req.params.id],
  });
});

module.exports = router;
