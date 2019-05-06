const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('HomePage');
})

app.listen(port, () => {
  console.log(`The movieList Express is listening on localhost:${port}.`);
})