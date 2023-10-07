const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();


const imageStorage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});


const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10000000, // 10 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|JPG|jpeg)$/)) {
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

app.post("/upload", imageUpload.single("image"), (req, res) => {
  res.send(req.file);
});


app.post("/uploadMany", imageUpload.array("images", 4), (req, res) => {
  res.send(req.files);
});


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
