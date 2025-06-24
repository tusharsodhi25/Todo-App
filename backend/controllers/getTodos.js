const Todo = require('../model/Todo');

exports.getTodos = async (req,res)=>{
    try{

        const todos = await Todo.find({});

        console.log(todos);

        res.status(200)
        .json({
            success:true,
            message:"all todos fetched",
            data:todos
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