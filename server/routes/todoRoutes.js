const express = require("express");
const router = express.Router();
const controller = require("../controllers/todoController.js");

router.get("/", controller.getAllTodos);
router.post("/", controller.addTodo);
router.put("/:id", controller.toggleTodo);
router.delete("/:id", controller.removeTodo);

module.exports = router;
