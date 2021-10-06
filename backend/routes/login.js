const express = require("express");
const users = require("../../database/users.js");
let router = express.Router();

router.post("/", function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  if (username == null) res.send(false);
  if (password == null) res.send(false);

  let check = false;
  let user = users[username];
  if (user?.username == username) if (user?.password == password) check = true;
  res.send(check);
});
module.exports = router;
