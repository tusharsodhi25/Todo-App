const express = require('express');
const app = express();
const TodoRoute = require('./routes/TodoRoute');
const db = require('./config/database')
const cors = require('cors')
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3003


app.use('/api',TodoRoute);


app.listen(PORT,()=>{
    console.log(`server connected on ${PORT}`)
})
db();


