const express = require("express")
const mongoose = require("mongoose")

const Recipe = require("./models/recipeModel")
const recipeRouter = require("./routes/recipeRoute")

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://cansufranko:cansufranko@nodeodevcluster.7bqfnju.mongodb.net/?retryWrites=true&w=majority&appName=NodeOdevCluster")
    .then(() => console.log("MongoDB Connected"))

    .catch((err) => console.log(err))


app.get("/", (req, res) => {

    res.send("Merhaba Express.js")

})





app.use("/recipe", recipeRouter)


app.listen(9000)