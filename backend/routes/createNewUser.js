let express = require("express");
const users = require("../../database/users.js");
let {user} = require("../middleWare/classes.js");
let router = express.Router();

router.post("/", function (req, res) {

    let username = req.body.username
    let password = req.body.password
    
    users[username] = new user(username, password);
    res.send(true);
});
module.exports = router;
