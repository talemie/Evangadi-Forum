const { StatusCodes } = require("http-status-codes");
const db = require("../db/dbConfig");

// fetch questions
async function getQuestions(req, res) {
    // res.json({ msg: "all questions" });
    try {
        const fetchQuestions = `SELECT * FROM questions order by id desc`
        const questions = await db.query(fetchQuestions)
        return res.status(StatusCodes.OK).json({questions:questions[0]})
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
	const { questionid, title, description, tag } = req.body;
	if (!userid) {
		return res
			.status(StatusCodes.BAD_REQUEST)
			.json({ msg: "user needs to be lo logged first" });
	}
	try {
		const insertQuestion = `INSERT INTO questions (userid,questionid,title,description,tag) VALUES(?,?,?,?,?)`;
		await db.query(insertQuestion, [
			userid,
			questionid,
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

module.exports = { addQuestion, getQuestions };
