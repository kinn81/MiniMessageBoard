var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString('en-GB')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString('en-GB')
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages});
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.name, added: new Date().toLocaleString('en-GB')});
  res.redirect('/')
});


module.exports = router;
