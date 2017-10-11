let express = require('express');
let router = express.Router();
const Products = require('../db/products');
const exphbs = require('express-handlebars');


router.get('/', (req,res) => {
  Products.getAllProducts();
  res.render('indexPro', (err, hbs) => {
    res.send(hbs);
  });
});

router.get('/new', (req,res) => {
  console.log('new page GET')
  res.render('newPro', (err, hbs) => {
    res.send(hbs);
  });
});

router.get('/:id', (req, res) => {
  //call getProductById()
  //call render product....
  res.render('productsPro', (err, hbs) => {
    res.send(hbs);
  });
});

router.get('./products/:id/edit', (req, res) => {
  console.log(req.params.id);
  res.render('editPro', (err, hbs) => {
    res.send(hbs);
  });
});

router.post('/new', (req,res) => {
  //req = { name: String, price: String, inventory: String }
console.log(req.body);

  if(req.body === req.body) {
    Products.setId(req.body);
    res.render('newPro', (err, hbs) => {
      res.send(hbs);
      //add success partial
      console.log({'success' : true});
    });
   }else{
    res.render('newPro', (err, hbs) => {
      res.send(hbs);
        //   with 404 error partial handlebar
        console.log({'success' : false});
    });
   }
});

router.put('/:id/edit', (req, res) => {
  //call Products.getProductById()
  // call editProduct
  res.render('edit', (err,hbs) => {
    res.send(hbs);
  });
});

router.delete('/:id/edit', (req, res) => {
  //remove item from array
  //call deleteProduct()
});


module.exports = router;