const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    require: true
  },
  mobileNo: {
    type: String,
    unique: true,
    required: true
  },
  JobTitle: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  EmployeeType: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  JoiningDate: {
    type: Date,
    required: false,
    default: Date.now
  }

});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = { Employee };