let express = require('express');
let router = express.Router();
const Products = require('../db/products');
const exphbs = require('express-handlebars');

router.get('/', (req,res) => {
  res.render('productsHome', (err, hbs) => {
    res.send(hbs);
  });
});

router.get('/:id', (req,res) => {
  res.render()

});

router.post('/', (req,res) => {
  //req = { name: String, price: String, inventory: String }

  if(successful) {
    Products.setId(req.body);
    res.render('productsHome', (err, hbs) => {
      res.send(hbs);
      //add success partial
      console.log({'success' : true});
    });
   }else{
    res.render('postProducts', (err, hbs) => {
      res.send(hbs);
        //   with 404 error handlebar
        console.log({'success' : false});
    });
   }
});


module.exports = router;