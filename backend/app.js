let indexRouter = require("./routes/index.js")
let loginRouter = require("./routes/login.js")
let createNewUserRouter = require("./routes/createNewUser.js")
let updateUserRouter = require("./routes/updateUser.js")
let getUserRouter = require("./routes/getUser.js")

const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const parser = require('body-parser').json()
app.use(parser)

app.use("/", indexRouter)
app.use("/login", loginRouter)
app.use("/createNewUser", createNewUserRouter) 
app.use("/updateUser", updateUserRouter)
app.use("/getUser", getUserRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  