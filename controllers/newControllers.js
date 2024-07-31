const asyncHandler = require('express-async-handler');
const queries = require('../db/queries');

module.exports = {
  get: (req, res, next) => {
    res.render('new', { title: 'Create new message' });
  },

  post: asyncHandler(async (req, res, next) => {
    await queries.insertMessages(req.body.username, req.body.message);
    res.redirect('/');
  }),
};
