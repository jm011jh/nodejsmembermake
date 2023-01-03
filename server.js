const express = require("express");
const app = express();
const path = require("path")
const port = 8080;
const route = require("./route.js")
const db = require("./db.js")
db()
app.use('/',route)
app.listen(port, () => {
    console.log(`listening on ${port}`)
})