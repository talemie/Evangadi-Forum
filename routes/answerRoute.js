const express = require("express");
const { addAnswer, getAnswer } = require("../controller/answerController");
const router = express.Router();


// get an answer
router.get("/get-answer", getAnswer);

// add answer

router.post("/add-answer", addAnswer);
module.exports=router