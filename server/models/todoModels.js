const pool = require("../config/db.js");

const getTodos = async () => {
  const result = await pool.query("SELECT * FROM todos ORDER BY id");
  return result.rows;
};

const createTodo = async (title) => {
  const result = await pool.query(
    "INSERT INTO todos (title) VALUES ($1) RETURNING *",
    [title]
  );
  return result.rows[0];
};

const updateTodo = async (id, completed) => {
  const result = await pool.query(
    "UPDATE todos SET completed=$1 WHERE id=$2 RETURNING *",
    [completed, id]
  );
  return result.rows[0];
};

const deleteTodo = async (id) => {
  await pool.query("DELETE FROM todos WHERE id=$1", [id]);
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
