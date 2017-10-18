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
   let image = article.image;
   let title = article.title;
   let body = article.body;
   let author = article.author;
   let urlTitle = encodeURI(title);

   if ( !title || !body || !author) {
     throw new Error('Invalid');
   }

   return db.any('INSERT INTO articles (title, body, author, urlTitle, image) VALUES($1, $2, $3, $4, $5)', [title, body, author, urlTitle, image])
    .then((data) => {
      console.log(data);
    })
    .catch((error) =>{
      console.log('ERROR :', error);
    });

   }

  getArticleByTitle(article) {
    return db.one('SELECT * FROM articles WHERE title = $1', article);
  }

  editArticle(article, obj) {
    let title = obj.title;
    let body = obj.body;
    let author = obj.author;
    let urltitle = encodeURI(obj.title);

    return db.none('UPDATE articles SET title=$1, body=$2, author=$3, urltitle=$4 WHERE title=$5',
      [title, body, author, urltitle, article]);
  }

  deleteArticle(article) {
    return db.result('DELETE FROM articles WHERE title=$1', article);
  }
}


module.exports = new Articles();




