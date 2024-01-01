const express = require("express");
const {
	addQuestion,
	getQuestions,
	getSingleQuestion,
} = require("../controller/questionController");
const router = express.Router();

// get all questions
router.get("/all-questions", getQuestions);
// get single question
router.get("/question", getSingleQuestion);

// add question

router.post("/add-question", addQuestion);
module.exports=router