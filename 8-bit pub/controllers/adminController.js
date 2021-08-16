const send = require("../utils/mail");
const shvl = require("shvl");

module.exports = {
  home: function (req, res) {
    return res.sendView("admin.html");
  },

  email: async function (req, res) {
    let contents = {};

    Object.keys(req.body).forEach((key) => {
      shvl.set(contents, key, req.body[key]);
    });

    contents.from = '"admin" <admin@8-bit.pub>';

    try {
      await send(contents);
      return res.json({message: "Success."});
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
