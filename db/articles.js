class Articles {
  constructor() {
    //{id: Number, name: String, price: Number, inventory: Number}
    this._articlesArr = [];
    this._urlTitle = 1;
  }

  getAllArticles() {
    return this._articlesArr;
  }

  setUrlTitle(article) {
    //req = { title: String, body: String, author: String urlTitle: string}
    let encoded = encodeURI(article.title);
    article.urlTitle = encoded;
    this._articlesArr.push(article);
    console.log(this._articlesArr);
  }

  getArticleByTitle(article) {
    function search(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].title === nameKey) {
              return myArray[i];
            }
          }
        }
        console.log(article);
    let result = search(article, this._articlesArr);
    return result;
  }

  editArticle(article, obj) {
    //create validation true / false
    let foundObj = this.getArticleByTitle(article);
    let grabObj = this._articlesArr.indexOf(foundObj);
    this._articlesArr.splice(grabObj, 1);
    let matchTitle = foundObj.title;
    console.log(matchTitle);
    foundObj = obj;
    obj.title = matchTitle;
    obj.body = obj.body;
    obj.author = obj.author;
    let encoded = encodeURI(obj.title);
    obj.urlTitle = encoded;
    this._articlesArr.push(obj);
    console.log(obj);
    console.log(this._articlesArr);
  }

  deleteArticle(article) {
    let foundObj = this.getArticleByTitle(article);
    let grabObj = this._articlesArr.indexOf(foundObj);
    this._articlesArr.splice(grabObj, 1);
    console.log(this._articlesArr);

  }


};

module.exports = new Articles();