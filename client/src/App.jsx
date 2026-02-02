import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:5000/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    await fetch("http://localhost:5000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTodos();
  };

  const toggleTodo = async (todo) => {
    await fetch(`http://localhost:5000/api/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
  };

  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className="inputdiv">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
        />
        <button className="btn" onClick={addTodo}>Add</button>
      </div>
      <div>
        <h3>Total Todos: {todos.length}</h3>
        <ul className="list">
          {todos.map((todo,index) => (
            <li key={index}>
              <span>{index + 1}. </span>
              <span
                onClick={() => toggleTodo(todo)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                  color: todo.completed ? "gray" : "black",
                }}
              >
                {todo.title}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
