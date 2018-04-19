const faker = require('faker');
const pgClient = require('./index.js');

/*eslint-disable */
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const insertDummyData = function () { 
  const recipeNames = [];
  for (let i = 0; i < 100; i++) {
    recipeNames.push('recipe ' + i);
  }

  for (let i = 0; i < 100; i++) { // insert recipes into database
    let id = i;
    let name = recipeNames[i];
    let namesub = faker.lorem.word();
    let tags = '{"tag1", "tag2"}';
    let time = '30-45 mins';
    let description = 'recipedesc' + faker.lorem.word();
    let servings = 2;
    let calories = 234;
    let imgurl = faker.image.image();
    let recipeQuery = `INSERT INTO recipes (id, name, namesub, tags, time, description, servings, calories, imgurl) VALUES (${id}, '${name}', '${namesub}', '${tags}', '${time}', '${description}', ${servings}, ${calories}, '${imgurl}')`;

    pgClient.query(recipeQuery, (err, res) => {
      if (err) {
        console.log(err);
      }
    });
  }

  const wineNames = ['wine1', 'wine2', 'wine3', 'wine4', 'wine5', 'wine6', 'wine7', 'wine8', 'wine9', 'wine10', 'wine11', 'wine12', 'wine13', 'wine14', 'wine15']

  for (let i = 0; i < 15; i++) { // insert wines into database
    let id = i;
    let name = wineNames[i];
    let description = 'winedesc' + i;
    let imgurl = faker.image.image();
    let wineQuery = `INSERT INTO wines (id, name, description, imgurl) VALUES (${id}, '${name}', '${description}', '${imgurl}')`;
    pgClient.query(wineQuery, (err, res) => {
      if (err) {
        console.log(err);
      }
    });
  }
  
  for (let i = 0; i < 20; i++) { // insert pairings into database
    let recipeid = getRandomInt(99);
    let wineid = getRandomInt(15);

    let pairingsQuery = `INSERT INTO pairings (recipeid, wineid) VALUES (${recipeid}, ${wineid})`;
    pgClient.query(pairingsQuery, (err, res) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

insertDummyData();
