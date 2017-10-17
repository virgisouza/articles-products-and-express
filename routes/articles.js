//jshint esversion : 6

let express = require('express');
let router = express.Router();
const Articles = require('../models/articles');



router.get('/', (req, res) => {
  res.render('./articles/index', {articles : Articles.getAllArticles()});
});

router.get('/new', (req, res) => {
  res.render('./articles/new');
});

router.get('/:title', (req,res) => {
  console.log(req.params.title);
  res.render('./articles/:title');
});

router.get('/:title/edit', (req,res) => {
  res.render('.articles/:title/edit');
});

router.post('/new', (req, res) => {
  let data = req.body;
  Articles.create(data);
    return res.render('./articles/new');

});



module.exports = router;