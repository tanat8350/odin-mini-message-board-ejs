const messages = require("../routes/index").messages;

module.exports = {
  get: (req, res, next) => {
    res.render("new", { title: "Create new message" });
  },

  post: (req, res, next) => {
    messages.push({
      user: req.body.user,
      text: req.body.text,
      added: new Date(),
    });
    res.redirect("/");
  },
};
