const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const bodyParser  = require("body-parser")



const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})