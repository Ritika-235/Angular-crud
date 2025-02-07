const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const mysqlPool = require('./config/db');

//configure
dotenv.config();

// rest object
const app = express();
app.use(cors());

//middleware
app.use(bodyParser.json());


app.use('/api/categories', require('./routes/category'));
app.use('/api/products', require('./routes/product'));



//routes
app.get('/test', (req,res) => {
    res.status(200).send('<h1> Angular Nodejs Mysql APP</h1>');
});

//port
const PORT = process.env.PORT || 8080 ;

app.listen(PORT, ()=>{
    console.log("Server is running on port 3000");
})





