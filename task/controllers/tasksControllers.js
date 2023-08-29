const Task = require('../models/taskSchema.js')

const getTask = async (req, res) => {
    try {
        const getData = await Task.find({})
        res.status(200).send({ getData });
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(200).send({ task });
    } catch (error) {
        return res.status(400).send({ message: "Bussiness validation error" });
    }
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const body = req.body
    try {
        const getData = await Task.findByIdAndUpdate(id, body, { new: true })
        res.status(200).send({ getData });
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        const getData = await Task.findByIdAndDelete(req.params.id)
        res.status(200).send({ getData });
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}


module.exports = {
    getTask,
    createTask,
    deleteTask,
    updateTask,
}