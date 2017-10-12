let express = require('express');
let router = express.Router();
const Products = require('../db/products');


router.get('/', (req,res) => {
  res.render('./productViews/indexPro', {products : Products.getAllProducts()});
});

router.get('/new', (req,res) => {
  res.render('./productViews/newPro');
});

router.get('/:id', (req, res) => {
  res.render('./productViews/productsPro', {oneProduct : Products.getProductById(req.params.id)});
});

router.get('/:id/edit', (req, res) => {
  res.render('./productViews/editPro', {editProduct : Products.getProductById(req.params.id)});
});

router.post('/new', (req,res) => {
  Products.setId(req.body);
  if (req.body) {
    res.redirect('./');
    console.log({'success' : true});
  }else{
    res.redirect('back');
    console.log({'success' : false});
  }


});

router.put('/:id/edit', (req, res) => {
  Products.editProduct(req.params.id, req.body);
  if(req.params.id && req.body){
    res.redirect('./');
    console.log({'success' : true});
  }else{
    res.redirect('back');
    console.log({'success' : false});
  }
});

router.delete('/:id/edit', (req, res) => {
  Products.deleteProduct(req.params.id);
  if (req.params.id) {
    res.redirect('./');
    console.log({'success' : true});
  }else{
    res.redirect('back');
    console.log({'success' : false});
  }
});


module.exports = router;