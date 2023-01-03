const mongoose = require("mongoose")

module.exports = () => {
    function connect(){
        mongoose.set('strictQuery',false);
        mongoose.connect("mongodb+srv://jm011jh:Tjdwoals92!@cluster-01.zdkcr0u.mongodb.net/?retryWrites=true&w=majority", (err) => {
            if (err) console.err("mongodb connection err", err)
            console.log("mongodb connected")
        },{useNewUrlParser: true})
    }
    connect();
    mongoose.connection.on('disconnected', connect)
    require("./schema/kitty.js")
}