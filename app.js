const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express();
const port = 3000;

const staticpath = path.join(__dirname,"../public");
// app.use(express.static(staticpath));
app.set("view engine","hbs");


app.get("/",(req,res) => {
    res.render("home")
})
app.get("/about",(req,res) => {
    res.render("about")
})
app.get("/weather",(req,res) => {
    res.render("weather")
})
app.get('/',(req, res) => {
    res.send("this is home page")
})
app.use(express.static(staticpath));
app.listen(port, () => {
    console.log(`server is listening on the port no ${port}`);
});


