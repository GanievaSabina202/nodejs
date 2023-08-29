const {Router} = require('express');
const router = Router();

const TaskControllers = require('../controllers/tasksControllers.js')

router.get('/task', TaskControllers.getTask)
router.post('/task', TaskControllers.createTask)
router.delete('/task/:id', TaskControllers.deleteTask)
router.patch('/task/:id', TaskControllers.updateTask)

module.exports = router