const Todo = require('../models/Todo');


exports.getTodobyId = async(req,res)=>{


    try{
        // fetching id from the parameters of request body
        const id = req.params.id;

        const todo = await Todo.findById({_id:id});

        // if id not found
        if(!todo){
            return res.status(500)
            .json({

                 success:false,
                 message:"No data found"
            })
        }
        // data found
        res.status(200)
        .json({
          success: true,
          data:todo,
          message:"Data fetched"
        })

    }

    catch(error){

        console.error(error);
        res.status(500)
        .json({
            success: false,
            error:error.message,
            message: 'Server Error'
        })




    }








}