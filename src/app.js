const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.json({
        message: "TaskFlow API çalışıyor!"
    });
});

app.use("/api/tasks", taskRoutes);

module.exports = app;