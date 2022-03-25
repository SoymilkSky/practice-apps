const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .catch((err) => console.log(err));

function post(formData) {
  db.queryAsync("INSERT INTO forms VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
}

module.exports = {
  db: db,
  post: post
}
