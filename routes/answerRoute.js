const express = require("express");
const { addAnswer } = require("../controller/answerController");
const router = express.Router();


// get an answer
// router.get("/get-answer", getAnswer);

// add answer

router.post("/add-answer", addAnswer);
module.exports=router