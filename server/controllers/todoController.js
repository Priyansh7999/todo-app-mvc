const todoModel = require("../models/todoModels.js");

const getAllTodos = async (req, res) => {
  const todos = await todoModel.getTodos();
  res.json(todos);
};

const addTodo = async (req, res) => {
  const todo = await todoModel.createTodo(req.body.title);
  res.status(201).json(todo);
};

const toggleTodo = async (req, res) => {
  const todo = await todoModel.updateTodo(
    req.params.id,
    req.body.completed
  );
  res.json(todo);
};

const removeTodo = async (req, res) => {
  await todoModel.deleteTodo(req.params.id);
  res.sendStatus(204);
};

module.exports = {
  getAllTodos,
  addTodo,
  toggleTodo,
  removeTodo,
};
