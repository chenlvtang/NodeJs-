module.exports = {
  home: function (req, res) {
    if (req.session.username) {
      return res.sendView("portal.html");
    }
    return res.sendView("home.html");
  }
}

