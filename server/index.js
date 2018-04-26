const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const path = require('path');
const pgClient = require('../database/index.js');

const app = express();

app.use(cors());
app.use('/', express.static(path.join(__dirname, '/../public')));
app.use('/recipes/:id', express.static(path.join(__dirname, '/../public')));
app.use(parser.json());

app.get('/recipes/:id/menu', (req, res) => {
  const { id } = req.params;
  const recipeQuery = `SELECT * FROM recipes WHERE id = ${id}`;
  const wineQuery = `SELECT w.* FROM pairings p 
                     INNER JOIN wines w ON w.id = p.wineid 
                     WHERE p.recipeid = ${id}`;
  pgClient.query(recipeQuery, (err, recipeInfo) => {
    if (err) {
      res.status(500);
      res.send(err);
      return;
    }
    pgClient.query(wineQuery, (err, winePairings) => {
      if (err) {
        res.status(500);
        res.send(err);
        return;
      }
      const recipeResult = recipeInfo.rows[0];
      recipeResult.wines = winePairings.rows;
      res.send(recipeResult);
    });
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
