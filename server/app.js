const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const userRoutes = require("./routes/userRoute");
const questionRoutes = require("./routes/questionRoute");
const answerRoutes = require("./routes/answerRoute");

// db connection
const db = require("./db/dbConfig");
const authMiddleware = require("./middleware/authMiddleware");

// allowing cors middleware
app.use(cors());

// json middleware to extract json body data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// user routes middleware
app.use("/api/users", userRoutes);

// question routes middleware
app.use("/api/questions", authMiddleware, questionRoutes);

// answers routes middleware
app.use("/api/answers", authMiddleware, answerRoutes);

// starting the servver and the db connection
async function start() {
	try {
		const result = await db.execute('select "test"');
		// console.log(result);
		app.listen(port);
		console.log("database connection established");
		console.log(`App listening on : http://localhost:${port}`);
	} catch (error) {
		console.log(error.message);
	}
}

start();

