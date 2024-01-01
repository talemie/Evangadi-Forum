const { StatusCodes } = require("http-status-codes");
const db = require("../db/dbConfig");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

// fetch questions
async function getQuestions(req, res) {
    // res.json({ msg: "all questions" });
    try {
		// const fetchQuestions = `SELECT * FROM questions order by id desc`
		const fetchQuestions = `SELECT questions.*,users.username FROM questions left join users ON questions.userid=users.userid order by id desc`;
        const questions = await db.query(fetchQuestions)
        return res.status(StatusCodes.OK).json({questions:questions[0]})
    } catch (error) {
        console.log(error.message);
				return res
					.status(500)
					.json({ msg: "something went wrong, try again later!" });
    }
}

// fetch a single question
async function getSingleQuestion(req, res) {
	// res.json({ msg: "all questions" });
	try {
		const {questionid}=req.query
		const fetchSingleQuestion = `SELECT questions.*,users.username FROM questions left join users ON questions.userid=users.userid where questionid=? order by id desc `;
		const questions = await db.query(fetchSingleQuestion, [questionid]);
		return res.status(StatusCodes.OK).json({ questions: questions[0] });
	} catch (error) {
		console.log(error.message);
		return res
			.status(500)
			.json({ msg: "something went wrong, try again later!" });
	}
}

// add/ask questions
async function addQuestion(req, res) {
	const userid = req.user.userid;
	const { title, description, tag } = req.body;
	if (!userid) {
		return res
			.status(StatusCodes.BAD_REQUEST)
			.json({ msg: "user needs to be lo logged first" });
	}
	try {
		// generating a random question id 
		function generateRandomQuestionId() {
			const randomBytes = crypto.randomBytes(16);
			const uuid = uuidv4({ random: randomBytes });
			return uuid;
		}
		const questionId = generateRandomQuestionId();

		const insertQuestion = `INSERT INTO questions (userid,questionid,title,description,tag) VALUES(?,?,?,?,?)`;
		await db.query(insertQuestion, [
			userid,
			questionId,
			title,
			description,
			tag,
		]);
		return res.status(StatusCodes.CREATED).json({ msg: "Question added!" });
	} catch (error) {
		console.log(error.message);
		return res
			.status(500)
			.json({ msg: "something went wrong, try again later!" });
	}
}

module.exports = { addQuestion, getQuestions, getSingleQuestion };
