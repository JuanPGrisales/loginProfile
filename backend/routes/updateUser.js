let express = require("express");
const users = require("../../database/users.js");
let router = express.Router();

router.post("/",function (req, res) {
    let username = req.body.username;
    let newPassword = req.body.password;
    let newEmail = req.body.email;  
    let newAge = req.body.age;

//  updateUser(username, newPassword = null, newEmail = null, newAge = null) {
    if (!users[username]) res.send(false);
    if (newPassword != null) users[username].password = newPassword;
    if (newEmail != null) users[username].email = newEmail;
    if (newAge != null) users[username].age = newAge;
    res.send(true);
})
module.exports = router