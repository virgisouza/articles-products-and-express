class Products {
  constructor() {
    //saving data here
    //{id: Number, name: String, price: Number, inventory: Number}
    this._productsArr = [];
    this._sku = 0;
  }

  getProducts() {
    return this._productsArr;
  }

  setId(product) {
    product.id = 'p' + this._sku++;
    this._productsArr.push(product);
    console.log(this._productsArr);
  }

  addToArr() {
    //pushes complete object (with id) to _productsArr
  }




};

module.exports = new Products();