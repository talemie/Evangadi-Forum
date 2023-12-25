const express = require("express");
const { addQuestion, getQuestions } = require("../controller/questionController");
const router = express.Router();

// get all questions
router.get("/all-questions", getQuestions);

// add question

router.post("/add-question", addQuestion);
module.exports=router