
var pgPromise = require("pg-promise");
var pgInstance = pgPromise();

var config = {
  host: "localhost",
  port: 5432,
  database: 'mood_db',
  user: "khalid",

};


var connection = pgInstance( process.env.DATABASE_URL ||config);

module.exports = connection;