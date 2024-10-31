// import model for fetching the schema

const Todo = require("../models/Todo");

// define route handler 
// whenever we want to access database then we have to ensure that main thread should not block for that we use async

exports.createTodo = async(req,res)=>{
   try{

     // extract title and desc from request body

     const{title,description} = req.body;

     // create new todo object and insert in DB , create use for insert in DB

     const response = await Todo.create({title,description});

     // send json response with success flag
     res.status(200).json({
      success:true,
      data:response,
      message: 'Entry Created Successfully'
   })

   }catch(error){

    console.error(error);
    console.log(error);
    res.status(500).json({
      success:false,
      data:"Internal server error",
      message:error.message

    })

   }
}