const nodemailer = require("nodemailer");

async function send(contents) {
  let transporter = nodemailer.createTransport({
  host: "******", // Plz use your own smtp server for testing.
  port: 25,
  tls: { rejectUnauthorized: false },
  auth: {
    user: "******",
    pass: "******",
  },
});
  return transporter.sendMail(contents);
}

module.exports = send;
