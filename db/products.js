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
    if(product) {
      product.price = product.price * 1;
      product.inventory = parseInt(product.inventory);
      product.id = this._sku++;
      this._productsArr.push(product);
      return true;
    }else{
      return false;
    }
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
    if(product && obj) {
      let foundObj = this.getProductById(product);
      let grabObj = this._productsArr.indexOf(foundObj);
      this._productsArr.splice(grabObj, 1);
      let matchId = foundObj.id;
      foundObj = obj;
      obj.id = matchId;
      obj.price = obj.price * 1;
      obj.inventory = parseInt(obj.inventory);
      this._productsArr.push(obj);
      return true;
    }else{
      return false;
    }
  }

  deleteProduct(product) {
    if(product) {
      let foundObj = this.getProductById(product);
      let grabObj = this._productsArr.indexOf(foundObj);
      this._productsArr.splice(grabObj, 1);
      return true;
    }else{
      return false;
    }
  }


};

module.exports = new Products();