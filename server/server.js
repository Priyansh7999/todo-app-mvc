const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
