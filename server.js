const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
app.engine('.hbs', exphbs({
  defaultlayout : 'main',
  extname : '.hbs'
}));
app.set('view engine', '.hbs');
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Welcome to the jungle');
});

app.listen(3000, () => {
  console.log(`Server listening on port : ${PORT}`);
});