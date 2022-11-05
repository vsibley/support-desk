const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Project = require('../models/projectModel')

// @desc  Get users projects
// @route  GET/api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'getProjs'})
});

// @desc  Get users projects
// @route  POST/api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'creat proj'})
});

module.exports = {
    getProjects,
    createProject
}