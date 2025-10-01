console.log("Reja Loyihamiz Ishga Tushdi");
const express = require("express");
const app = express();



// // MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");


// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code
// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4 routing code

app.post("/create-item", function (req, res) {
    console.log('user entered /create-item');
    console.log(req.body); 
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) =>  {
        res.json(data.ops[0]); 
    });
});

// detele qilish uchun yozilgan kodlar....

app.post("/delete-item", (req, res) => {
    const id = req.body.id;

    db.collection("plans").deleteOne( 
    { _id: new mongodb.ObjectId(id) },
    function(err, data) {
        res.json({ state: "success"});
    }
    );
    
});

//edit uchun kodlar

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) }, 
        { $set: {reja: data.new_input}}, 
        function(err, data) {
            res.json({ state: "success"});
        }
    );
});

// hammasini o;chisirish uchun kod...

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "hamma rejalarni o'chirish"});
        });
    }
    });



app.get("/author", (req, res) => {
    res.render("author", { user: user});
});



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