const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Task name required'],
    trim: true,
    maxlength: [64, 'Task name cannot be longer than 64 characters'],
  },
  completed: { type: Boolean, default: false },
})

module.exports = mongoose.model('Task', TaskSchema)
