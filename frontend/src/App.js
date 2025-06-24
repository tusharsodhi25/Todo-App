import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import { RxUpdate } from "react-icons/rx";
import './Styling/responsive.css'




const App = () => {

  const[todo,setTodo] = useState('');
  const[todos,setTodos] = useState([]);

  const[editTodo,seteditTodo] = useState(null);


  const[editText,setEditText] = useState('');

// createTodo


  const handler = async ()=>{

    const url = 'http://localhost:3002/api/createtodo'

    try{
      const res =  await axios.post(url,{title:todo});


      if(res.data.success){
        setTodos([...todos,res.data.data]);
        setTodo('');
      }

      
    }

    catch(error){
      console.log(error)
    }

     

  }

  // get todos

 useEffect(()=>{

   const fetchtodo = async ()=>{

    const url = 'http://localhost:3002/api/getTodo'
     
    try{


      const res = await axios.get(url);


      if(res.data.success){
        setTodos(res.data.data)
      }

    }

    catch(error){
      console.log(error)
    }
   

   }

   fetchtodo();



 },[])


 // delete todos

 const deletehandler = async(id)=>{

  try{

    const url = `http://localhost:3002/api/deleteTodo/${id}`


    await axios.delete(url);


    setTodos(todos.filter(todo=>todo._id !== id))

  }
  catch(error){
    console.log(error)
  }
   

 }


 // update todo

 const updateTodo = async()=>{

  const url = `http://localhost:3002/api/updateTodo/${editTodo}`

  try{
    const res = await axios.put(url,{title:editText})

    if(res.data.success){
      const updatedtodos = todos.map(todo=>todo._id === editTodo? {...todo,title:editText}:todo);

      setTodos(updatedtodos);
    }

    seteditTodo(null);
    setEditText('');
  }
  catch(error){
    console.log(error)
  }



 }






  
  return (
    <div className='container flex flex-col items-center min-w-screen bg-black min-h-screen text-white'>
      <h1 className='header font-bold text-3xl p-8 flex '>TODO APP</h1>
     <div className='flex gap-4'>

     <input
      className='input w-[400px] border border-white rounded-md p-2'
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      type="text" placeholder='Create Todo...' />

      <button onClick={handler} className=' bg-white text-black rounded-md p-2'>Create</button>
     </div>
     <div className='card flex flex-col space-y-4  mt-5 w-[500px]'>
        {
          todos.map((todo)=>(
            <div key={todo._id} className='rounded-lg  border flex justify-between space-y-2 gap-4 border-white p-5'>
              {
                editTodo === todo._id ? (
                  <input
                 className='p-1 border border-white'
                  value={editText}
                  onChange={(e)=>setEditText(e.target.value)}
                  />
                ):(<span>{todo.title}</span>)
              }

              <div className='flex gap-3 relative top-1'>

                {
                  editTodo === todo._id ? (<RxUpdate onClick={updateTodo}/>):( <FaRegEdit onClick={()=>{
                seteditTodo(todo._id);
                setEditText(todo.title)
              }}/>)
                }
              <MdDelete onClick={()=>deletehandler(todo._id)}  />
              </div>
              </div>
          ))
        }
     </div>
    </div>
  )
}

export default App
