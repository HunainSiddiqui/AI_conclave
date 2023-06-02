const express = require('express');
const app = express() ;
const errorMiddleware = require("./middleware/error");
require('dotenv').config() ;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const user = require("./routes/user");
app.use("/api/v1",user) ;




app.use(errorMiddleware);
module.exports = app ;