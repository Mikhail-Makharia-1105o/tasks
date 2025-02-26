import express from 'express'
import { getTasks, addTask, updateTask, deleteTask } from './tasks.js'

const app = express();
app.use(express.json());

// GET all tasks
app.get('/tasks', (req, res) => {
  res.json(getTasks());
});

// POST a new task
app.post('/tasks', (req, res) => {
  const { name, completed } = req.body;
  const newTask = { id: Date.now(), name, completed: !!completed };
  addTask(newTask);
  res.status(201).json(newTask);
});

// PUT to update a task
app.put('/tasks/:id', (req, res) => {
  const { name, completed } = req.body;
  const updatedTask = { name, completed: !!completed };
  updateTask(req.params.id, updatedTask);
  res.json(updatedTask);
});

// DELETE a task
app.delete('/tasks/:id', (req, res) => {
  deleteTask(req.params.id);
  res.sendStatus(204);
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
