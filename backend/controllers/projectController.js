const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Project = require('../models/projectModel')



// @desc  Get users projects
// @route  GET/api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
  //Get user using ID&JWT
  const user = await User.findById(req.user.id)

  if(!user) {
    res.staus(401)
    throw new Error('User not found')
  }
  const projects = await Project.find({user: req.user.id})
  res.status(200).json(projects)
});



// @desc  Get users projects
// @route  POST/api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error("Please add collab type and description");
  }

  //Get user using ID&JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.staus(401);
    throw new Error("User not found");
  }
  const project = await Project.create({
    product, 
    description,
    user: req.user.id,
    status: 'new'
  })

  res.status(201).json(project);
});

module.exports = {
    getProjects,
    createProject
}