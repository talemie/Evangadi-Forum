const { StatusCodes } = require("http-status-codes");
const db = require("../db/dbConfig");

// post answer
async function addAnswer(req, res) {
	const { answer } = req.body;
	const { questionid } = req.query;
	
	try {
		const userId = req.user.userid;
		const insertAnswer = `INSERT INTO answers (userid,questionid,answer) VALUES(?,?,?)`;
		await db.query(insertAnswer, [userId, questionid, answer]);
		return res.status(StatusCodes.CREATED).json({ msg: "Answer added" });
	} catch (error) {
		console.log(error.message);
		return res
			.status(500)
			.json({ msg: "something went wrong, try again later!" });
	}
}

// get answer
async function getAnswer(req, res) {
	const questionid = req.query.questionid;

	try {
		const selectAnswer = `select answers.*, users.username from answers LEFT JOIN users on answers.userid=users.userid where questionid=?`;
		const [answer] = await db.query(selectAnswer, [questionid]);
		return res.status(StatusCodes.OK).json({ answer });
	} catch (error) {
		console.log(error.message);
		return res
			.status(500)
			.json({ msg: "something went wrong, try again later!" });
	}
}
module.exports = { addAnswer, getAnswer };
