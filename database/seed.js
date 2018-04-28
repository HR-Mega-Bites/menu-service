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
    let tags = `{"${faker.lorem.word()}", "${faker.lorem.word()}"}`;
    let time = '30-45 mins';
    let description = 'recipedesc' + faker.lorem.paragraph();
    let servings = getRandomInt(5);
    let calories = getRandomInt(1000);
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

  let queryString = ``;
  for (let i = 0; i < 2; i++) { // insert 2 wines per recipe into database
    for (let j = 0; j < 100; j++) { 
      let recipeid = j;
      let wineid = getRandomInt(15);
      queryString += `(${recipeid}, ${wineid}), `;
    }
  }
  queryString = queryString.substring(0, queryString.length - 2)
  let pairingsQuery = `INSERT INTO pairings (recipeid, wineid) VALUES ${queryString}`;
  pgClient.query(pairingsQuery, (err, res) => {
    if (err) {
      throw err;
    }
    pgClient.end();
  });
};

insertDummyData();
