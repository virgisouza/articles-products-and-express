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
  //req = { name: String, price: String, inventory: String }
  //if (validation) {do this redirect}else{do this redirect}
  Products.setId(req.body);
  res.render('./productViews/newPro');
  console.log({'success' : true});
});

router.put('/:id/edit', (req, res) => {
  //functionality works. need to push item back into array at same position so array stays organized in numeric order
  //if (validation) {do this redirect}else{do this redirect}

  Products.editProduct(req.params.id, req.body);
  res.render('./productViews/editPro');
});

router.delete('/:id/edit', (req, res) => {
  Products.deleteProduct(req.params.id);
  res.render('./productViews/editPro');
});


module.exports = router;