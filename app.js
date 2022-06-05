const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const upload = require("./routes/upload");
const art = require("./routes/art");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());

app.use("/public", express.static("public"));
app.use("/api/upload", upload);
app.use("/api/art", art);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
