//jshint esversion: 6
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({
  defaultlayout : 'main',
  extname : '.hbs'
}));

app.set('view engine', '.hbs');
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyparser.urlencoded({extended : true}));
app.use(methodOverride('_method'));

//app.use(express.static('public')); for css

app.get('/', (req, res) => {
  res.render('./layouts/main');
});

let articles = require('./routes/articles');
app.use('/articles', articles);

let products = require('./routes/products');
app.use('/products', products);


module.exports = app;