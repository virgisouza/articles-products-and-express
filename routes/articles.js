//jshint esversion : 6

let express = require('express');
let router = express.Router();
const Articles = require('../models/articles');

router.get('/', (req, res) => {
 return Articles.getAllArticles()
 .then((data) => {
    res.render('./articles/index', {articles: data});
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/new', (req, res) => {
  res.render('./articles/new');
});

router.get('/:title', (req,res) => {
  let title = req.params.title;
  // console.log(title);

  return Articles.getArticleByTitle(title)
  .then((data) => {
    res.render('./articles/articles', {oneArticle: data});
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/:title/edit', (req,res) => {
  let title = req.params.title;

  return Articles.getArticleByTitle(title)
    .then((data)=> {
      res.render('./articles/edit', {editArticle: data});
    })
    .catch((err)=> {
      console.log(err);
    });

});

router.post('/new', (req, res) => {
  let data = req.body;
  Articles.create(data);

  if(data === data) {
    res.render('./articles/new');
  }else{
    res.redirect('back');
  }
});

router.put('/:title/edit', (req,res)=> {
  let title = req.params.title;
  let body = req.body;
  console.log(body);

  return Articles.editArticle(title, body)
    .then((data) => {
      res.redirect('/articles');
    })
    .catch((err) => {
      console.log('put error: ', err);
      res.redirect('back');
    });
});

router.delete('/:title/edit', (req, res) => {
  let title = req.params.title;
  console.log(title);
  return Articles.deleteArticle(title)
    .then((data) => {
      res.redirect('/articles');
    })
    .catch((err)=> {
      console.log(err);
    });
});



module.exports = router;