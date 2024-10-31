
const mongoose = require('mongoose');

require('dotenv').config();



const dbConnect = ()=>{


    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('DATA BASE CONNECTED');
    })
    .catch((error)=>{
        console.log('ERROR OCCURS',error);
    })

}


module.exports = dbConnect;
