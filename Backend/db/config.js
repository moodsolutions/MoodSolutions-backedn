
var pgPromise = require("pg-promise");
var pgInstance = pgPromise();

var config = {
  host: "localhost",
  port: 5432,
  database: 'mood_db',
  user: "anoud",
  password: 1234567890
};


var connection = pgInstance( process.env.DATABASE_URL ||config);

module.exports = connection;