const express = require("express")
const users = require("../../database/users.js");
let router = express.Router()

router.get("/",function (req, res) {
    let username = req.body.username    
    res.send(users[username]);
})
module.exports = router