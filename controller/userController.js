const { emit } = require("process");
const db = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.JWT_SECRET;

// register
async function register(req, res) {
	const { username, firstname, lastname, email, password } = req.body;
	if (!email || !password || !firstname || !lastname || !username) {
		return res
			.status(StatusCodes.BAD_REQUEST)
			.json({ msg: "Please enter all required information" });
	}

	try {
		const selectUser = `SELECT username,userid from users where username=? or email=?`;
		const [user] = await db.query(selectUser, [username, email]);
		// check if user already existed
		if (user.length) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ msg: "user already existed!" });
		}
		if (password.length < 8) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ msg: "password must be at least 8 characters" });
		}

		// encrypt the password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const registerUser = `INSERT INTO users (username,firstname,lastname,email,password) VALUES(?,?,?,?,?)`;
		await db.query(registerUser, [
			username,
			firstname,
			lastname,
			email,
			hashedPassword,
		]);
		return res
			.status(StatusCodes.CREATED)
			.json({ msg: "User created successfully!" });
	} catch (error) {
		console.log(error.message);
		return res
			.status(500)
			.json({ msg: "something went wrong, try again later!" });
	}
}

// login
async function login(req, res) {
	const { email, password } = req.body;
	if (!email || !password) {
		return res
			.status(StatusCodes.BAD_REQUEST)
			.json({ msg: "Please enter all required fields" });
	}

	try {
		// select user from db
		const selectUser = `SELECT username,userid,password from users where email=?`;
		const [user] = await db.query(selectUser, [email]);
		if (!user.length) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ msg: "Invalid credentials" });
		}

		// compare password
		const isMatch = await bcrypt.compare(password, user[0].password);
		if (!isMatch) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ msg: "Invalid credentials" });
        }
        // token 
        const username = user[0].username
        const userid=user[0].userid
        const token = jwt.sign({ username, userid }, secret, {
					expiresIn: "1d",
				});
       return res.status(StatusCodes.OK).json({msg:'user logged in successfully',token,username})
	} catch (error) {
		console.log(error.message);
		return res
			.status(500)
			.json({ msg: "something went wrong, try again later!" });
	}
}

// check user
async function checkUser(req, res) {
    const username = req.user.username
    const userid = req.user.userid
    
	res.status(StatusCodes.OK).json({msg:'valid user',username,userid});
}

module.exports = { register, login, checkUser };
