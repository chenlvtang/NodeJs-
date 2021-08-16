const user = require("../modules/users");

module.exports = {
  signinPage: function (req, res) {
    return res.sendView("signin.html");
  },

  signupPage: function (req, res) {
    return res.sendView("signup.html");
  },

  signin: function (req, res) {
    user.signin(req.body.username, req.body.password, function (err, result) {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (result.length) {
        req.session.username = result[0].username;
        return res.json({ message: "Signin success." });
      } else {
        return res.status(401).json({ message: "Username or password wrong." });
      }
    });
  },

  signup: function (req, res) {
    user.signup(req.body.username, req.body.password, function (err, result) {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.json({ message: "Signup success." });
    });
  },

  logout: function (req, res) {
    req.session.username = undefined;
    return res.redirect(302, "/");
  }
};
