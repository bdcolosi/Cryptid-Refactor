require("dotenv").config();

const pgp = require("pg-promise")({
  query: (e) => {
    console.log("QUERY:", e.query);
  },
});

const option = {
  host: 'drona.db.elephantsql.com',
  database: 'thjiwvrp',
  user: 'thjiwvrp',
  password: '6P80C1KXY6j7opGN6tqYu0R-rx54z4hD'
};

const db = pgp(option);

module.exports = db;
