
const http = require('http');
const app = require('./server');
const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, (err) => {
  console.log('Server listening on port: ' + PORT);
});