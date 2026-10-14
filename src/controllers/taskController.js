const tasks = require("../data/tasks");

const getAllTasks = (req, res) => {
    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
};

const getTaskById = (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Görev bulunamadı."
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
};

const createTask = (req, res) => {
    const { title, description, status, priority, assignee } = req.body;

    const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
        title,
        description,
        status: status || "pending",
        priority,
        assignee,
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        message: "Görev başarıyla oluşturuldu.",
        data: newTask
    });
};

const updateTask = (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Görev bulunamadı."
        });
    }

    const { title, description, status, priority, assignee } = req.body;

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;
    if (priority !== undefined) task.priority = priority;
    if (assignee !== undefined) task.assignee = assignee;

    res.status(200).json({
        success: true,
        message: "Görev başarıyla güncellendi.",
        data: task
    });
};

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);

    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Görev bulunamadı."
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];

    res.status(200).json({
        success: true,
        message: "Görev başarıyla silindi.",
        data: deletedTask
    });
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};