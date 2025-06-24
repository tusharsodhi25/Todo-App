const Todo = require('../model/Todo');

exports.createTodo = async (req,res)=>{
    try{

        const{title} = req.body;

        const response = await Todo.create({title})

        res.status(200)
        .json({
            success:true,
            message:"todo created successfully",
            data:response
        })

    }
    catch(error){
        console.log(error)

        res.status(500)
        .json({
            success:false,
            message:"internal server error",
            error:error.message
        })

    }
}