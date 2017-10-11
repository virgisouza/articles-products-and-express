let express = require('express');
let router = express.Router();
const Products = require('../db/products');
const exphbs = require('express-handlebars');
// const products = new Products();


router.get('/', (req,res) => {
  res.render('./productViews/indexPro', {products : Products.getAllProducts()});
});

router.get('/new', (req,res) => {
  res.render('./productViews/newPro', (err, hbs) => {
    res.send(hbs);
  });
});

router.get('/:id', (req, res) => {
  res.render('./productViews/productsPro', {oneProduct : Products.getProductById(req.params.id)});
});

router.get('/:id/edit', (req, res) => {
  console.log(req.params.id);
  res.render('./productViews/editPro', (err, hbs) => {
    res.send(hbs);
  });
});

router.post('/new', (req,res) => {
  //req = { name: String, price: String, inventory: String }
  if(req.body === req.body) {
    Products.setId(req.body);
    res.render('./productViews/newPro', (err, hbs) => {
      res.send(hbs);
      //add success partial
      console.log({'success' : true});
    });
   }else{
    res.render('./productViews/newPro', (err, hbs) => {
      res.status(404).send(hbs);
        //   with 404 error partial handlebar
        console.log({'success' : false});
    });
   }
});

router.put('/:id/edit', (req, res) => {
  //call Products.getProductById()
  // call editProduct
  res.render('./productViews/edit', (err,hbs) => {
    res.send(hbs);
  });
});

router.delete('/:id/edit', (req, res) => {
  //remove item from array
  //call deleteProduct()
});


module.exports = router;