const express = require("express");
const https = require("https");
const fs = require("fs");


const app = express();


app.get("/", (req, res) => {
  res.send("Hello there!");
});


https.createServer({
      // keys and certificates are generated using openssl
      key: fs.readFileSync(__dirname + "/key.pem"), 
      cert: fs.readFileSync(__dirname + "/cert.pem"), 
    },app)
  .listen(8000, () => {
    console.log("Server running on port 6000.");
  });
