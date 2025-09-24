console.log("Reja Loyihamiz Ishga Tushdi");
const express = require("express");
const res = require("express/lib/response");
const app = express();



// // MongoDB chaqirish
const db = require("./server").db();


// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code
// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", function (req, res) {
    console.log('user entered /create-item');
    console.log(req.body); 
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) =>  {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        }else {
            res.end("successfully added");
        }
    });
});

app.get('/author', (req, res) => {
    res.render("author", { user: user});
});


// 4 routing code
app.get("/", function (req, res) {
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        }else {
            console.log(data);
            res.render("reja", { items: data});
        }
    });
});


module.exports = app;