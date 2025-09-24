const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = 
    "mongodb+srv://ray_pusan_1:130ucLm9ISpRM6kS@cluster0.bk48yh4.mongodb.net/Reja";

    mongodb.connect(
    connectionString, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
    (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        
        module.exports = client;
        const app = require("./app");

        console.log("salom ishda tushdim");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on. port: ${PORT} http://localhost:${PORT}`);
        });
    }
});

