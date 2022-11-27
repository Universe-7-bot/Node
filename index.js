var express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.send("Hello, I am Sohan");
    console.log("sohan");
})

app.get("/files", (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})

app.get("/video", (req, res) => {
    res.sendFile(__dirname + "/play.mp4");
})

app.listen(3000, (err) => { console.log(err) }
)