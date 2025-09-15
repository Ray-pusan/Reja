const express = require("express");
const app = express();
app.use(express.json());

let todos = [{ id: 1, title: "JS o‘rganish", done: false }];

app.get("/api/todos", (req, res) => res.json(todos));
app.post("/api/todos", (req, res) => {
  const todo = { id: Date.now(), title: req.body.title || "", done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(3000, () => console.log("http://localhost:3000"));
