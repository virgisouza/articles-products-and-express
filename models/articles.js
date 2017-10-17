//jshint esversion : 6
//jshint esversion : 6

const pgp = require('pg-promise')();
const db = pgp('postgress://localhost:5432/articles_and_products_db');

class Articles {
  constuctor(){

  }

  getAllArticles() {
    //return all articles
    return db.any('SELECT * FROM articles');
  }

//setURLTitle ; /articles/new (post, create, insert)
  create(title, body, author){
   title = article.title;
   body = article.body;
   author = article.author;

   if (!title || !body || !author) {
     throw new Error('Invalid');
   }

   return db.any('INSERT INTO products VALUES($1, $2, $3)', [title, body, author]);
   }


}


//getArticleByTitle /articles/:title (get, select)

//editArticle /articles/:title/edit (get, put(update), delete(delete))

//deleteArticle /articles/:title/edit (delete(delete))





module.exports = new Articles();