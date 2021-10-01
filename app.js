let loginRouter = require(".routes/login.js")
let createNewUserRouter = require(".routes/createNewUser.js")
let updateUserRouter = require(".routes/updateUserRouter.js")
let getUserRouter = require(".routes/getUserRouter.js")

const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(require('body-parser').json())

app.use("/login", loginRouter)

app.use("/createNewUser", loginRouter)

app.use("/updateUser", loginRouter)

app.use("/getUser", loginRouter)






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  