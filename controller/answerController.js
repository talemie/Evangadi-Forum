const { StatusCodes } = require("http-status-codes");
const db = require("../db/dbConfig");


async function addAnswer(req, res) {
    const { questionid,answer } = req.body;
    try {
        // const fetchQuestion = `SELECT userid,questionid,title from questions where questionid=?`;
        // const [question] = await db.query(fetchQuestion, [questionid]);
        const userId = req.user.userid
        const insertAnswer = `INSERT INTO answers (userid,questionid,answer) VALUES(?,?,?)`
        await db.query(insertAnswer,[userId,questionid,answer])
        return res.status(StatusCodes.CREATED).json({ msg:'Answer added' });
    } catch (error) {
         console.log(error.message);
					return res
						.status(500)
						.json({ msg: "something went wrong, try again later!" });
    }
    
}
module.exports = { addAnswer };