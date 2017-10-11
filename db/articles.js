class Articles {
  constructor() {
    //{id: Number, name: String, price: Number, inventory: Number}
    this._articlesArr = [];
    this._sku = 1;
  }

  getAllArticles() {
    return this._articlesArr;
  }

  setId(product) {
    product.price = product.price * 1;
    product.inventory = parseInt(product.inventory);
    product.id = this._sku++;
    this._articlesArr.push(product);
    console.log(this._articlesArr);
  }

  getArticleById(product) {
    function search(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].name === nameKey) {
              return myArray[i];
            }
          }
        }
    let result = search(product, this._articlesArr);
    return result;
  }

  editArticle(product, obj) {
    //create validation true / false
    let foundObj = this.getArticleById(product);
    let grabObj = this._articlesArr.indexOf(foundObj);
    this._productsArr.splice(grabObj, 1);
    let matchId = foundObj.id;
    foundObj = obj;
    obj.id = matchId;
    obj.price = obj.price * 1;
    obj.inventory = parseInt(obj.inventory);
    this._articlesArr.push(obj);
    console.log(obj);
    console.log(this._articlesArr);
  }

  deleteArticle(product) {
    let foundObj = this.getArticleById(product);
    let grabObj = this._productsArr.indexOf(foundObj);
    this._articlesArr.splice(grabObj, 1);
    console.log(this._articlesArr);

  }


};

module.exports = new Articles();