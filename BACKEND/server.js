const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_PATH = path.join(__dirname, "todos.json");

app.use(cors()); // CORS muammosini hal qiladi
app.use(express.json()); // JSON body parsing

// Mahalliy JSON fayldan todos-ni o‘qish
const readTodos = () => {
  const data = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(data);
};

// Mahalliy JSON faylga todos-ni yozish
const writeTodos = (todos) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(todos, null, 2));
};

// 🔹 GET /api/todos - Barcha todos-ni olish
app.get("/api/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// 🔹 POST /api/todos - Yangi todo qo‘shish
app.post("/api/todos", (req, res) => {
  const todos = readTodos();
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo); // ✅ xato to‘g‘rilandi
  writeTodos(todos);
  res.status(201).json(newTodo);
});

// 🔹 DELETE /api/todos/:id - Todo-ni o‘chirish
app.delete("/api/todos/:id", (req, res) => {
  const todos = readTodos();
  const filtered = todos.filter((todo) => todo.id !== Number(req.params.id));
  writeTodos(filtered);
  res.status(204).end();
});

// 🔹 PUT /api/todos/:id - Todo-ni tahrirlash
app.put("/api/todos/:id", (req, res) => {
  const todos = readTodos();
  const updated = todos.map((todo) =>
    todo.id === Number(req.params.id) ? { ...todo, ...req.body } : todo,
  );
  writeTodos(updated);
  res.json(updated.find((todo) => todo.id === Number(req.params.id)));
});

// 🔸 Serverni ishga tushurish
app.listen(PORT, () => {
  console.log(`✅ Server ishga tushdi: http://localhost:${PORT}`);
});
