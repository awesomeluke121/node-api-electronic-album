var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/photos.json", function(req, res) {
    res.json([
        [
            "images/image1.jpg",
            "領養代替購買。"
        ],
        [
            "images/image2.jpg",
            "流浪動物認養"
        ],
        [
            "images/image3.jpg",
            "他們都在等待"
        ]
    ]);
});
app.listen(process.env.PORT || 3000);
