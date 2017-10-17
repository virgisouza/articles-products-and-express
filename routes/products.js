//jshint esversion : 6
let express = require('express');
let router = express.Router();
const Products = require('../models/products');

router.get('/', (req, res) => {
 return Products.getAllProducts()
 .then((data) => {
    res.render('./products/index', {products: data});
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/new', (req, res) => {
  res.render('./products/new');
});

router.get('/:id', (req,res) => {
  let id = req.params.id;

  return Products.getProductById(id)
  .then((data) => {
    res.render('./products/products', {oneProduct: data});
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/:id/edit', (req,res) => {
  let id = req.params.id;

  return Products.getProductById(id)
    .then((data)=> {
      res.render('./products/edit', {editProduct: data});
    })
    .catch((err)=> {
      console.log(err);
    });

});

router.post('/new', (req, res) => {
  let data = req.body;
  Products.create(data);

  if(data === data) {
    res.render('./products/new');
  }else{
    res.redirect('back');
  }
});

router.put('/:id/edit', (req,res)=> {
  let id = req.params.id;
  let body = req.body;

  return Products.editProduct(id, body)
    .then((data) => {
      res.redirect('/products');
    })
    .catch((err) => {
      console.log('put error: ', err);
      res.redirect('back');
    });
});

router.delete('/:id/edit', (req, res) => {
  let id = req.params.id;

  return Products.deleteProduct(id)
    .then((data) => {
      res.redirect('/products');
    })
    .catch((err)=> {
      console.log(err);
    });
});


module.exports = router;