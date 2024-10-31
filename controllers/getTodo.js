const Todo = require('../models/Todo');


exports.getTodo = async(req,res)=>{
    try{

        // fetch all items from DB
        const todos = await Todo.find({});

        // response update

        res.status(200)
        .json({
            success:true,
            data : todos,
            message:"Entire data fetched"

        })

    }

    catch(error){

        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })

    }
}