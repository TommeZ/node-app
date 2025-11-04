const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, CI/CD World!");
});

module.exports = app; // ✅ Only export the app, no listen()
