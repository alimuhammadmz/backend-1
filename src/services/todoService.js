const Todo = require('../models/todoModel.js');

const getAllTodos = async () =>{
    const todos =  await Todo.find();
    if(todos){
        return todos;
    }
}

const addNewTodo = async(details) =>{
    const newTodo = new Todo(details);

    const todoAdded = await newTodo.save();
    if(todoAdded){
        return todoAdded;
    }
}

module.exports.addNewTodo = addNewTodo;
module.exports.getAllTodos = getAllTodos;