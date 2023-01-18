const express = require("express");
const app = express();
const connectDB = require("./config/db");

//connent to database
connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", require("./routes/url"));

app.listen(process.env.PORT || 3009);
