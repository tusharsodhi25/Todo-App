const express = require("express");
const app = express();

// load config from env file

require('dotenv').config();

const PORT = process.env.PORT || 4000;

// middlware to parse json request body

app.use(express.json());

// import routes for todo API

const todoRoutes = require('./routes/todo');

// mount the todo API routes

app.use('/api/v1',todoRoutes);


// start the server

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

// connect to the DB
const dbConnect = require('./config/database');
dbConnect();

// // default route

// app.get('/',(req,res)=>{
//     res.send((`<h1>Home Page</h1>`))
// })
