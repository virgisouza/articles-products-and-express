class Products {
  constructor() {
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

  editProduct(product, obj) {
    //create validation true / false
    let foundObj = this.getProductById(product);
    let grabObj = this._productsArr.indexOf(foundObj);
    this._productsArr.splice(grabObj, 1);
    let matchId = foundObj.id;
    foundObj = obj;
    obj.id = matchId;
    obj.price = obj.price * 1;
    obj.inventory = parseInt(obj.inventory);
    this._productsArr.push(obj);
    console.log(obj);
    console.log(this._productsArr);
  }

  deleteProduct(product) {
    let foundObj = this.getProductById(product);
    let grabObj = this._productsArr.indexOf(foundObj);
    this._productsArr.splice(grabObj, 1);
    console.log(this._productsArr);

  }


};

module.exports = new Products();