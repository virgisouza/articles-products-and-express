//jshint esversion : 6

let express = require('express');
let router = express.Router();
const Products = require('../models/products');

router.get('/', (req, res) => {
 return Products.getAllProducts()
 .then((data) => {
    res.render('./productViews/indexPro', {products: data});
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/new', (req, res) => {
  res.render('./productViews/newPro');
});

router.get('/:id', (req,res) => {
  let id = req.params.id;

  return Products.getProductById(id)
  .then((data) => {
    res.render('./productViews/productsPro', {oneProduct: data});
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/:id/edit', (req,res) => {
  let id = req.params.id;

  return Products.getProductById(id)
    .then((data)=> {
      res.render('./productViews/editPro', {editProduct: data});
    })
    .catch((err)=> {
      console.log(err);
    });

});

router.post('/new', (req, res) => {
  let data = req.body;
  Products.create(data);

  if(data === data) {
    res.render('./productViews/newPro');
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