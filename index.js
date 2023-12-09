// "test": "echo \"Error: no test specified\" && exit 1"
const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.get('/',(req,res) => {
    res.render("home")
})
app.listen(PORT, () =>console.log(`Server Start at PORT:${PORT}`));