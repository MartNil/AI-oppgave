
const express = require("express");
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.get("/", (req, res, next) => {
    console.log("inroot");
    let greeting = "hei kis"
    res.render("index", { greeting: greeting })
})
app.listen(8080, () => { 
    console.log("app started")
});

