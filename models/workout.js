const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },    
    exercises: [
      {
        type: {
          type: String,
          required: "Enter the type of workout",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter a name for workout",
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
        duration: {
          type: Number,
          required: "Enter the duration of workout",
        },
        distance: {
          type: Number,          
        },
      },
    ]
  }
)


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
