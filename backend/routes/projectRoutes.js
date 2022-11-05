const express = require("express");
const router = express.Router();
const { getProjects, createProject } = require("../controllers/projectController");

const { protected } = require("../middleware/authMiddleware");

router.route("/").get(protected, getProjects).post(protected, createProject);

module.exports = router;
