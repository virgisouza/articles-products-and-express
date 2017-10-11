const express = require('express');
const bodyparser = require('body-parser');
// const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const app = express();
app.engine('.hbs', exphbs({
  defaultlayout : 'main',
  extname : '.hbs'
}));
app.set('view engine', '.hbs');
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyparser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.render('home', (err, hbs) => {
    res.send(hbs);
  });
});

let articles = require('./routes/articles');
app.use('/articles', articles);

let products = require('./routes/products');
app.use('/products', products);


module.exports = app;