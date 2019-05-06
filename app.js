const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

// 透過 engine 語法定義所使用的樣版引擎（名稱、相關設定）
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

// 透過 set 語法設定顯示樣板 view engine 為 handlebars
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`The movieList Express is listening on localhost:${port}.`);
})