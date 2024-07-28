const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

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
module.exports.messages = messages;
