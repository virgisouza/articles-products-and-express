//jshint esversion : 6

let express = require('express');
let router = express.Router();
const Articles = require('../DB/articles_and_products');

router.get('/', (req, res) => {
  res.render('./articles', {articles : Articles.getAllArticles()});
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

});

module.exports = router;