let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "8-bit-pub-db",
  user: "******",
  password: "******",
  database: "8-bit-pub",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
