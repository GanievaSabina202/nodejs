const { createCustomError } = require('../errors/customError.js');
const asyncHandler = require('../middlewares/asyncHandler.js');
const Task = require('../models/taskSchema.js')

const getTask = asyncHandler(
    async (req, res, next) => {
        const getData = await Task.find({});
        if (!getData || getData.length === 0) {
            return next(createCustomError(`No Data`, 404));
        }
        res.status(200).send({ getData });
    }
)

const createTask = asyncHandler(
    async (req, res) => {
        const task = await Task.create(req.body);
        return res.status(200).send({ task });
    }
)

const updateTask = asyncHandler(
    async (req, res, next) => {
        const { id } = req.params;
        const body = req.body
        const getData = await Task.findByIdAndUpdate(id, body, { new: true });
        if (!getData) {
            return next(createCustomError(`No Data`, 404));
        }
        res.status(200).send({ getData });
    }
)

const deleteTask = asyncHandler(
    async (req, res, next) => {
        const getData = await Task.findByIdAndDelete(req.params.id);
        res.status(200).send({ getData });
    }
)


module.exports = {
    getTask,
    createTask,
    deleteTask,
    updateTask,
}