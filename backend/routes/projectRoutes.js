const express = require("express");
const router = express.Router();
const { getProjects, createProject, getSingleProject, updateProject, deleteProject } = require("../controllers/projectController");

const { protected } = require("../middleware/authMiddleware");

router.route("/").get(protected, getProjects).post(protected, createProject)

router.route('/:id').get(protected, getSingleProject).delete(protected, deleteProject).put(protected, updateProject)

module.exports = router;
