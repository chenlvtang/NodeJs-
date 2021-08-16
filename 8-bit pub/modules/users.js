const sql = require("../utils/db.js");

module.exports = {
  signup: function (username, password, done) {
    sql.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          return done(err, null);
        }
        if (!res.length) {
          sql.query(
            "INSERT INTO users VALUES (?, ?)",
            [username, password],
            function (err, res) {
              if (err) {
                console.log("error: ", err);
                return done(err, null);
              } else {
                return done(null, res.insertId);
              }
            }
          );
        } else {
          return done({
            message: "Username already taken."
          }, null);
        }
      });
  },

  signin: function (username, password, done) {
    sql.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          return done(err, null);
        } else {
          return done(null, res);
        }
      }
    );
  },
};
