const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const path = require('path');
const pgClient = require('../database/index.js');
const redisClient = require('../database/redis.js');

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

  redisClient.get(id, (err, result) => {
    if (result) { // if recipe info is cached in redis, send cached result to client
      res.send(JSON.parse(result));
    } else { // otherwise query the database and save info to cache
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
          const recipe = recipeInfo.rows[0];
          if (recipe) {
            recipe.wines = winePairings.rows;
          }
          redisClient.set(id, JSON.stringify(recipe));
          res.send(recipe);
        });
      });
    }
  });
});

const port = 3001;

app.listen(port);
