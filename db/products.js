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
    function search(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].name === nameKey) {
              return myArray[i];
            }
          }
        }
    let result = search(product, this._productsArr);
    return result;
  }

  editProduct(product) {
    let foundProduct = this.getProductById(product);
    console.log(foundProduct);
    product.price = product.price * 1;
    product.inventory = parseInt(product.inventory);
    console.log(this.getProductById(product));

  }

  deleteProduct(product) {
    this.getProductById(product);
    console.log(this.getProductById(product));

  }


};

module.exports = new Products();