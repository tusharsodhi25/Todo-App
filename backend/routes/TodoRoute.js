const{createTodo}  = require('../controllers/createTodo');
const{getTodos} = require('../controllers/getTodos')
const{deleteTodo} = require('../controllers/deleteTodo');
const{updateTodo} = require('../controllers/updateTodo');

const express = require('express');

const router = express.Router();

router.post('/createtodo',createTodo);
router.get('/getTodo',getTodos);
router.delete('/deleteTodo/:id',deleteTodo)
router.put('/updateTodo/:id',updateTodo);




module.exports = router;