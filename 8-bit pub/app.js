const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const fileStore = require('session-file-store')(session);
const path = require("path");
const http = require("http");
const Router = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    name: "session",
    secret: "******",
    store: new fileStore({}),
    resave: false,
    saveUninitialized: false
}))

app.use(function (req, res, next) {
  res.sendView = function (view) {
    return res.sendFile(__dirname + "/views/" + view);
  };
  next();
});

app.use("/", Router);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.send(err.message);
});

const port = process.env.PORT || "3000"
const server = http.createServer(app);

server.listen(port);
