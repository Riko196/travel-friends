const express = require("express");
const config = require("../config");
const api = require("./api");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
var multer = require('multer')

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api.router);

app.listen(config.port, config.host, () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, '../public')
  },
  filename: function (req, file, cb) {
    console.log("filename")
    console.log(req.file)
    console.log(file.filename)
    cb(null, Date.now().toString())
  }
})
var upload = multer({ storage: storage }).single('file')

app.post('/upload', function(req, res) {
  console.log("/upload: " + req.file)
  upload(req, res, function (err) {
         console.log("upload")
         console.log(err)
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)
  })
});
