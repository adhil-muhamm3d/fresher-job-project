const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fresher_job",
  password: "",
  port: 5432,
});

module.exports = pool;