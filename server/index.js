const express = require('express');
const parser = require('body-parser');
const path = require('path');
const pgClient = require('../database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(parser.json());

app.get('/recipes/:id', (req, res) => {
  res.send('testing');
});

const port = 8080;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
