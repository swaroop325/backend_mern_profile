require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

const connUri = process.env.MONGO_LOCAL_CONN_URL;
let PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

// for parsing application/json
app.use(express.json()); // for parsing application/xwww-
app.use(express.urlencoded({ extended: false }));
//form-urlencoded

mongoose.promise = global.Promise;
mongoose.connect(connUri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB --  database connection established successfully!")
);
connection.on("error", (err) => {
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running. " + err
  );
  process.exit();
});

app.use(passport.initialize());
require("./middlewares/jwt")(passport);

require("./routes/index")(app);

//=== 5 - START SERVER
app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT + "/")
);
