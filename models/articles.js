//jshint esversion : 6
const pgp = require('pg-promise')();
const db = pgp('postgress://localhost:5432/articles_and_products_db');

class Articles {
  constuctor(){

  }

  getAllArticles() {
    return db.any('SELECT * FROM articles');
  }

  create(article) {
   let title = article.title;
   let body = article.body;
   let author = article.author;
   let urlTitle = encodeURI(title);

   if (!title || !body || !author) {
     throw new Error('Invalid');
   }

   return db.any('INSERT INTO articles (title, body, author, urlTitle) VALUES($1, $2, $3, $4)', [title, body, author, urlTitle])
    .then((data) => {
      console.log(data);
    })
    .catch((error) =>{
      console.log('ERROR :', error);
    });

   }

  getArticleByTitle(article) {
   function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i];
          }
        }
      }
    let data = this.getAllArticles();
    console.log(data);
    let result = search(article, data);
    console.log(result);
    return result;
  }

//editArticle /articles/:title/edit (get, put(update), delete(delete))
  editArticle(article) {

  }
//deleteArticle /articles/:title/edit (delete(delete))
  deleteArticle(article) {

  }
}


module.exports = new Articles();




