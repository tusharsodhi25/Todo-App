const express = require("express");

const router = express.Router();

// import controller
const {createTodo} = require('../controllers/createTodo');
const {getTodo} = require('../controllers/getTodo');
const {getTodobyId} = require('../controllers/getTodobyId');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');

// deinfe API routes
router.post('/createTodo',createTodo);

// fetching the data
router.get('/getTodo',getTodo);
router.get('/getTodobyId/:id',getTodobyId);

// update
router.put('/updateTodo/:id',updateTodo);

//delete
router.delete('/deleteTodo/:id',deleteTodo);

module.exports = router;