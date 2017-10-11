class Products {
  constructor() {
    //saving data here
    //{id: Number, name: String, price: Number, inventory: Number}
    this._productsArr = [];
    this._sku = 1;
  }

  getAllProducts() {
    return this._productsArr;
  }

  setId(product) {
    product.price = product.price * 1;
    product.inventory = parseInt(product.inventory);
    product.id = this._sku++;
    this._productsArr.push(product);
    console.log(this._productsArr);
  }

  getProductById(product) {
    console.log('getProductByID: ', product);
    let finder = this._productsArr.indexof(product.id);
    return this._productsArr.find(finder);
  }

  editProduct(product) {

  }

  deleteProduct(product) {

  }


};

module.exports = new Products();