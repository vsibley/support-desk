const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Project = require("../models/projectModel");
const Note = require("../models/noteModel");

// @desc  Get Notes for projects
// @route  GET/api/projects/:projectId/notes
// @access  Private

const getNotes = asyncHandler(async (req, res) => {
  //Get user using ID&JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.staus(401);
    throw new Error("User not found");
  }

  const project = await Project.findById(req.params.projectId)

  if(project.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not authorized')
  }
  const notes = await Note.find({project: req.params.projectId})

  res.status(200).json(notes);
})

// @desc  create Notes for projects
// @route  POST/api/projects/:projectId/notes
// @access  Private

const addNote = asyncHandler(async (req, res) => {
  //Get user using ID&JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.staus(401);
    throw new Error("User not found");
  }

  const project = await Project.findById(req.params.projectId)

  if(project.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not authorized')
  }
  const note = await Note.create({
    text: req.body.text,
    isOwner: false,
    project: req.params.projectId,
    user: req.user.id
})

  res.status(200).json(note);
})

module.exports = {
    getNotes,
    addNote,
}
