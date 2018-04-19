const pg = require('pg');

const connectionString = 'postgres://localhost/menuservice';
const pgClient = new pg.Client(connectionString);

pgClient.connect();

module.exports = pgClient;

