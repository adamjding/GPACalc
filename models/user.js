const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const course = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  creditHours: {
    type: Number,
    required: true
  }
})

const myuserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  totalCredits: {
      type: Number,
      default: 0
  },
  earnedCredits: {
      type: Number,
      default: 0
  },
  courses: [course]
})

module.exports = mongoose.model("User", myuserSchema);
