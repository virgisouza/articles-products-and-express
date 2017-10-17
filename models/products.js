//jshint esversion : 6

const pgp = require('pg-promise')();
const db = pgp('postgress://localhost:5432/articles_and_products_db');

class Products {
  constructor(){

  }

  create(){
   let name = product.name;
   let price = product.price;
   let inventory = product.inventory;

   if (!name || !price || !inventory) {
     throw new Error('Invalid');
   }

   return db.any('INSERT INTO products VALUES($1, $2, $3)', [name, price, inventory]);
  }

}

module.exports = new Products();