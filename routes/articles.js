let express = require('express');
let router = express.Router();
const Articles = require('../db/articles');


router.get('/', (req,res) => {
  res.render('./articles/index', {articles : Articles.getAllArticles()});
});

router.get('/new', (req,res) => {
  res.render('./articles/new');
});

router.get('/:title', (req, res) => {
  console.log(req.params.title);
  res.render('./articles/article', {oneArticle : Articles.getArticleByTitle(req.params.title)});
});

router.get('/:title/edit', (req, res) => {
  res.render('./articles/edit', {editArticle : Articles.getArticleByTitle(req.params.title)});
});

router.post('/new', (req,res) => {
  //if (validation) {do this redirect}else{do this redirect}
  Articles.setUrlTitle(req.body);
  res.render('./articles/new');
  console.log({'success' : true});
});

router.put('/:title/edit', (req, res) => {
  //if (validation) {do this redirect}else{do this redirect}
  Articles.editArticle(req.params.title, req.body);
  res.render('./articles/edit');
});

router.delete('/:title/edit', (req, res) => {
  Articles.deleteArticle(req.params.title);
  res.render('./articles/edit');
});


module.exports = router;