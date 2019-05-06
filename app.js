const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const movieList = require('./movies.json').results;

// 透過 engine 語法定義所使用的樣版引擎（名稱、相關設定）
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

// 透過 set 語法設定顯示樣板 view engine 為 handlebars
app.set('view engine', 'handlebars');

// HomePage Router
app.get('/', (req, res) => {
  res.render('index', {
    movies: movieList,
  });
})

// Search Router
app.get('/search', (req, res) => {
  const searchKeyword = req.query.keyword;
  const movies = movieList.filter(item => {
    return item.title.toLowerCase().includes(searchKeyword.toLowerCase());
  })
  res.render('index', {
    movies: movies,
    searchKeyword: searchKeyword,
  });
})

// Movies-Info Router
app.get('/movies/:id', (req, res) => {
  const movie = movieList.filter(item => {
    return item.id == req.params.id
  })
  res.render('show', {
    movie: movie[0],
  });
})

app.listen(port, () => {
  console.log(`The movieList Express is listening on localhost:${port}.`);
})