//jshint esversion : 6
const pgp = require('pg-promise')();
const db = pgp('postgress://localhost:5432/articles_and_products_db');

class Products {
  constructor(){

  }

  getAllProducts() {
    return db.any('SELECT * FROM products');
  }

  create(product){
   let name = product.name;
   let price = product.price * 1;
   let inventory = parseInt(product.inventory);

   if (!name || !price || !inventory) {
     throw new Error('Invalid');
   }

   return db.any('INSERT INTO products (name, price, inventory) VALUES($1, $2, $3)', [name, price, inventory]);
  }


  getProductById(product) {
    return db.one('SELECT * FROM products WHERE name= $1', product);
  }

  editProduct(id, obj) {
    let name = obj.name;
    let price = obj.price;
    let inventory = obj.inventory;

    return db.none('UPDATE products SET name=$1, price=$2, inventory=$3 WHERE name=$4',
      [name, price, inventory, id]);
  }

  deleteProduct(product) {
    return db.result('DELETE FROM products WHERE name=$1', product);
  }

}

module.exports = new Products();