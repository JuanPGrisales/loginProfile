const express = require("express")
let router = express.Router()

router.get("/",function (req, res) {
    res.send("User Manager")    
})
module.exports = router