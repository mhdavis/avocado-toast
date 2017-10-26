require('dotenv').config();
const express = require("express");
const path = require("path");
const http = require('http');
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const mongoose = require("mongoose");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const MongoStore = require('connect-mongo')(session);
const LocalStrategy = require("passport-local").Strategy;

// Passport + Session Configuration
// =======================================================
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
 }));
app.use(passport.initialize());
app.use(passport.session());

const User = require("./models/User");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Import routes and give the server access to them.
// =======================================================
const sessionRoutes = require("./routes/session-routes.js");
const userRoutes = require("./routes/user-routes.js");

app.use("/api/user", userRoutes);
app.use("/api", sessionRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Mongoose Connection
// =======================================================
mongoose.connect("mongodb://localhost/avocadotoast_db");
const db = mongoose.connection;
// Mongoose Errors
db.on("error", error => console.log(`Mongoose Error: ${error}`));
// On success db login
db.on("open", () => console.log("Mongoose connection successful."));

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
