const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for workout",
    },
    exercises: [
      {
        type: {
          type: Number,
          required: "Enter the type of workout",
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        durationOfExercise: {
          type: Number,
          required: "Enter the duration of workout",
        },
      },
    ],
  }
 
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
