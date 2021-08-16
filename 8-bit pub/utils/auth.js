let auth = function (req, res, next) {
  if (!req.session.username) {
    return res.redirect(302, "/");
  }
  if (req.session.username !== "admin") {
    if (req.method === "GET") {
      return res.sendView("forbidden.html");
    } else {
      return res.json({ message: "Forbidden." });
    }
  }
  next();
};

module.exports = auth;
