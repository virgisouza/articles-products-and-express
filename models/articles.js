//jshint esversion : 6
const pgp = require('pg-promise')();
const db = pgp('postgress://localhost:5432/articles_and_products_db');

class Articles {
  constuctor(){

  }

  getAllArticles() {
    return db.any('SELECT * FROM articles')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
//getArticleByTitle /articles/:title (get, select)
  getAllArticleByTitle() {

  }

//editArticle /articles/:title/edit (get, put(update), delete(delete))
  editArticle() {

  }
//deleteArticle /articles/:title/edit (delete(delete))
  deleteArticle() {

  }
}


module.exports = new Articles();




