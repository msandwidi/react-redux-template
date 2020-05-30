const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const chalk = require("chalk");

const isProdMode = process.env.NODE_ENV === "production";

const app = express();

app.set("trust proxy", 1);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (isProdMode) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>
  console.log(chalk.green("✓-- ") + `React server is running at port: ${PORT}`)
);

module.exports = app;
