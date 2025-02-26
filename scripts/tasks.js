let tasks = [];

async function getTasks() {
  const response = await fetch(`/tasks`)
  const data = await response.json();
  return data;
}

async function addTask(task) {
  try {
  const response = await fetch(`/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( { key: 'value' } )
    //{habit: task, id: Math.random(100) * +Date.now()}
  });
  const data = await response;
  return data;
  } catch (error) {
    throw error;
  }
}

async function deleteTask(id) {
  const response = await fetch(`/tasks/${id}`, {
    method: 'DELETE',
  });
}

async function updateTask(id, task) {
  deleteTask(id)
  const response = await fetch(`/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });
  const data = await response.json();
  return data;
}

export { getTasks, addTask, updateTask, deleteTask };