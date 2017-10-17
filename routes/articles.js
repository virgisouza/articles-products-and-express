//jshint esversion : 6

let express = require('express');
let router = express.Router();
const Articles = require('../models/articles');



router.get('/', (req, res) => {
 return Articles.getAllArticles()
 .then((data) => {
    console.log(data);
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
  console.log(title);

  return Articles.getArticleByTitle(title)
  .then((data) => {
    res.render('./articles/:title', {oneArticle: data});
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/:title/edit', (req,res) => {
  res.render('.articles/:title/edit');
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

router.put('/:title', (req,res)=> {

});



module.exports = router;