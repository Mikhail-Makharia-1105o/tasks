import { getTasks, addTask, updateTask, deleteTask } from './tasks.js';
import States from './states.js';

const tasklist = document.querySelector(".task-list");
const taskInput = document.querySelector(".task-input");
const switchState = document.querySelector(".switch");