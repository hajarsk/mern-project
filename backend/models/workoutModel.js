const mongoose = require('mongoose')

// define structure doc in db, apply  to model  
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    // how the object looks
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true }) // properties

module.exports = mongoose.model('Workout', workoutSchema)