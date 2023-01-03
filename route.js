const express = require("express");
const router = express.Router();
const Kitty = require("./schema/kitty.js");
router.get("/", (req, res) => {
    const newKitty = new Kitty({name : "yammi", gender: "male"})
    newKitty.save().then(() => {
        console.log(newKitty)
    }).catch( err => {
        console.log(err)
    })
    res.send("main")
})


module.exports = router