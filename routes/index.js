const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const allMessages = await queries.getAllMessages();
  res.render('index', { title: 'Mini message board', messages: allMessages });
});

router.get('/message/:id', async function (req, res, next) {
  const [message] = await queries.getMessage(req.params.id);

  if (!message) {
    return next({ status: 404, message: 'Message not found' });
  }

  res.render('detail', {
    title: 'Message detail',
    message,
  });
});

module.exports = router;
