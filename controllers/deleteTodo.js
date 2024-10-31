const Todo = require('../models/Todo');


exports.deleteTodo = async(req,res)=>{

      try{

        const id = req.params.id;

        await Todo.findByIdAndDelete(id);

        res.status(500)
        .json({
            success:true,
            message:"Todo Deleted"

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