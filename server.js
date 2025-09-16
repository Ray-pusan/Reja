console.log("birinchi loyihamiz");
const express = require("express");
const app = express();
const http = require("http");


// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// 2 Session code
// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", function (req, res) {
    console.log(req.body);
    res.json({test: "success"});
});

// 4 routing code
app.get("/", function (req, res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on. port: ${PORT}`);
});