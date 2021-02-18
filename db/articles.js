class Articles {
  constructor() {
    //{id: Number, name: String, price: Number, inventory: Number}
    this._articlesArr = [];
  }

  getAllArticles() {
    return this._articlesArr;
  }

  setUrlTitle(article) {
    if(article) {
      let encoded = encodeURI(article.title);
      article.urlTitle = encoded;
      this._articlesArr.push(article);
      return true;
    }else{
      return false;
    }
  }

  getArticleByTitle(article) {
    function search(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].title === nameKey) {
              return myArray[i];
            }
          }
        }
    let result = search(article, this._articlesArr);
    return result;
  }

  editArticle(article, obj) {
    if(article && obj) {
      let foundObj = this.getArticleByTitle(article);
      let grabObj = this._articlesArr.indexOf(foundObj);
      this._articlesArr.splice(grabObj, 1);
      let matchTitle = foundObj.title;
      foundObj = obj;
      obj.title = matchTitle;
      obj.body = obj.body;
      obj.author = obj.author;
      let encoded = encodeURI(obj.title);
      obj.urlTitle = encoded;
      this._articlesArr.push(obj);
      return true;
    }else{
      return false;
    }
  }

  deleteArticle(article) {
    if(article) {
      let foundObj = this.getArticleByTitle(article);
      let grabObj = this._articlesArr.indexOf(foundObj);
      this._articlesArr.splice(grabObj, 1);
      return true;
    }else{
      return false;
    }
  }
};

module.exports = new Articles();