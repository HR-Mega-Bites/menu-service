const express = require('express');
const parser = require('body-parser');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(parser.json());

let port = 8080;

app.listen(port, function() {
  console.log(`listening on http://localhost:${port}`);
});