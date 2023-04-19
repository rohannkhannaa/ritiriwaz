const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const session = require("express-session");
const cookiParser = require("cookie-parser");
const dotenv=require("dotenv")
const { connect } = require("mongoose");
const mongoose = require("mongoose");
dotenv.config();
const db_url  = process.env.DATABASE_URL ;
mongoose.connect(db_url , {
  useNewUrlParser: true,
});

app.use(cors());
app.use(cookiParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);



app.use("/", require(__dirname + "/routes/loginRegister.js"))

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
