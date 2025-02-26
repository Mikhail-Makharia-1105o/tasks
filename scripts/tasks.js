import axios from 'axios';
import env from 'dotenv'

let tasks = axios.get(`/tasks`)
.then(response => {
  return response.data.json()
}).catch(error => {
  console.log(error);
  return [];
})

const getTasks = (type) => {
  switch (type) {
    case 'all':
      return tasks;
    case 'active':
      return tasks.filter(t =>!t.completed);
    case 'completed':
      return tasks.filter(t => t.completed);
    default:
      return [];
  }
}

const addTask = (task) => {
  tasks.push(task);
};

const updateTask = (id, task) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...task };
  }
};

const deleteTask = (id) => {
  tasks = tasks.filter(t => t.id !== id);
};

export { getTasks, addTask, updateTask, deleteTask };