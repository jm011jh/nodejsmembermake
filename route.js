const express = require("express");
const router = express.Router();
const Kitty = require("./schema/kitty.js");
router.get("/", (req, res) => {
    res.send("main")
})

module.exports = router