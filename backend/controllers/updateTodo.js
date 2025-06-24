const Todo = require('../model/Todo');


exports.updateTodo = async (req , res)=>{
    try{

        const {id} = req.params;
        const {title} = req.body;

        const response = await Todo.findByIdAndUpdate(id,{title},{new:true});

        res.status(200)
        .json({
            success:true,
            message:"updated",
            data:response
        })

    }
    catch(error){
        console.log(error)
        res.status(500)
        .json({
            success:false,
            message:"internal server error"
        })
    }
}