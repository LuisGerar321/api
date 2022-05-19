const express = require("express");

const app = express();
const workoutRoutes = require("./routes/v1/workoutRoutes");

const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", workoutRoutes);

app.listen(PORT, () => {
    console.log(`API is linstening port ${PORT}`);
});