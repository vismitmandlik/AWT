const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");


const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(
  session({ 
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/login", (req, res) => {
  res.sendFile(__dirname + "index.html");
});


app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    const user = {
      username: username,
      password: password,
    };


    const token = jwt.sign(user, "secretkey", (err, token) => {
      res.cookie("token", token);
      res.redirect("/dashboard");
    });
  } else {
    res.send("Please enter Username and Password!");
  }
});


app.get("/dashboard", (req, res) => {
  if (req.cookies.token) {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, "secretkey");
    res.send(`Welcome ${decoded.username}`);
  } else {
    res.send("Please login to view this page.");
  }
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
