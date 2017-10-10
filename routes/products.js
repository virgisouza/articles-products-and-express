let express = require('express');
let router = express.Router();
const Products = require('../db/products');


let productsArr = [];

router.get('/', (req,res) => {
  console.log('rootsy');
  res.json({'products' : productsArr});
});

router.get('/:id', (req,res) => {
  res.send(req.params.id);
  console.log({'products' : productsArr});
});

router.post('/:id', (req,res) => {
  console.log(productsArr.length);

  //req = { name: String, price: String, inventory: String }

  req.body.name = req.params.id + "";
  req.body.price = '0';
  req.body.inventory = '3';

  productsArr.push(req.body);

  console.log(productsArr);

  res.json(req.body);
  console.log({'success' : true});
});


module.exports = router;