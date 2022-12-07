const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const bodyParse = require("body-parser");
// const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.sent("Welcome to zuri class");
});

app.listen(port, () => console.log(`starting server at port ${port}`));
