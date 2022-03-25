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
  // return new Promise((resolve, reject) => {
  //   db.queryAsync()
  // })
  let insert = "INSERT INTO forms(name, email, password, line1, line2, city, state, zip, phoneNumber, creditCardNum, expDate, CVV, cardZip) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.queryAsync(insert, formData, (err, data) => {
    if (err) { console.log(err) }
    else { return data }
  })
}

module.exports = {
  db: db,
  post: post
}