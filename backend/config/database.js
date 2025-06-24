const mongoose = require('mongoose');

require('dotenv').config();

const URL = process.env.DATABASE_URL


const db = async ()=>{

        await mongoose.connect(URL)
        .then(()=>{
            console.log('database connected')
        })
        .catch((error)=>{
            console.log(error,'error')
        })
   
}

module.exports = db;