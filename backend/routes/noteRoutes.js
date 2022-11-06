const express = require("express");
const router = express.Router({mergeParams: true});

const { protected } = require("../middleware/authMiddleware");
const {getNotes, addNote} = require('../controllers/noteController')

router.route('/').get(protected, getNotes).post(protected, addNote)

module.exports = router