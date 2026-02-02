const todoModel = require("../models/todoModels.js");

const getAllTodos = async (req, res) => {
  const todos = await todoModel.getTodos();
  res.json(todos);
};

const addTodo = async (req, res) => {
    const title = req.body.title;
  const todo = await todoModel.createTodo(title);
  res.json(todo);
};

const toggleTodo = async (req, res) => {
    const id = req.params.id;
    const completed = req.body.completed;
  const todo = await todoModel.updateTodo(id, completed);
  res.json(todo);
};

const removeTodo = async (req, res) => {
    const id = req.params.id;
  await todoModel.deleteTodo(id);
  res.sendStatus(204);
};

module.exports = {
  getAllTodos,
  addTodo,
  toggleTodo,
  removeTodo,
};
