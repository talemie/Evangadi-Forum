const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.json({ msg: "Authentication Invalid" });
    }
    const token = authHeader.split(' ')[1]
	try {
        const { username, userid } = jwt.verify(token, secret);
        // create one user field in the request 
        req.user = { username, userid };
       next()
	} catch (error) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.json({ msg: "Authentication Invalid" });
	}
}
module.exports=authMiddleware
