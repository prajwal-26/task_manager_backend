const Task = require('../models/models');

// Controllers methods for tasks
async function getAllTasks(req, res) {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createTask(req, res) {
  const { title, description, completed } = req.body;
  try {
    const newTask = await Task.create({ title, description, completed });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTaskById(req, res) {
  const taskId = req.params.id;
  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateTask(req, res) {
  const taskId = req.params.id;
  const { title, description, completed } = req.body;
  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      task.title = title;
      task.description = description;
      task.completed = completed;
      await task.save();
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteTask(req, res) {
  const taskId = req.params.id;
  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      await task.destroy();
      res.json({ message: 'Task deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};