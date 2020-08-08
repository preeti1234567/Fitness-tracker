const Workout = require("../models/workout.js");

module.exports = function (app) {
  // gets last workout
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then((dbworkout) => {
        res.json(dbworkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // add exercise to workout
  app.put("/api/workouts/:id", (req, res) => {
    console.log("Inserting exercise: ");
    const id = req.params.id;
    const updatedExercise = req.body;
    Workout.update(
      { _id: id },
      {
        $push: {
          exercises: updatedExercise,
        },
      }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  });

  // create a workout
  app.post("/api/workouts", (req, res) => {
    console.log("Inserting Workout: ");
    Workout.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  });

  // get workout in range
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((data) => {
        console.log("Sending from API RANGE: ");
        res.json(data);
      })
      .catch((err) => res.json(err));
  });
};
