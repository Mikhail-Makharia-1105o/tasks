import { getTasks, addTask, updateTask, deleteTask } from './tasks.js';
import express from 'express';
import States from './states.js';

const tasklist = document.querySelector(".task-list");
const taskInput = document.querySelector(".task-input");
const switchState = document.querySelector(".switch");

const app = express();
app.use(express.json());

const states = new States();


function updateTasks() {
    return app.get('/tasks', (req, res) => {
        res.json(getTasks(states.getState()));
    });
}

console.log(updateTasks())