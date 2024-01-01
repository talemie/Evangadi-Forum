const mysql2 = require("mysql2");
// db connection
const db = mysql2.createPool({
    user: "evangadiadmin",
    database: "evangadidb",
    host: 'localhost',
    password:'123456',
    connectionLimit:10
})
// db.execute('select "test"', (err, result) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(result);
//     }
// })

module.exports = db.promise();












// ------------------------------------------------------------------------------
// table creation queries
const createUser =`CREATE TABLE IF NOT EXISTS users(
    userid INT(20) NOT NULL auto_increment,
    username varchar(20) not null,
    firstname varchar(20) not null,
    lastname varchar(20) not null,
    email varchar(40) not null,
    password varchar(100) not null,
    PRIMARY KEY(userid)
)`
const createQuestion = `CREATE TABLE IF NOT EXISTS questions(
    id INT(20) NOT NULL auto_increment,
    questionid varchar(100) not null unique,
    userid INT(20) NOT NULL,
    title varchar(50) not null,
    description varchar(200) not null,
    tag varchar(20),
    PRIMARY KEY(id,questionid),
    FOREIGN KEY(userid) REFERENCES users(userid)
)`;
const createAnswers = `CREATE TABLE IF NOT EXISTS answers(
    answerid INT(20) NOT NULL auto_increment,
    userid INT(20) NOT NULL,
    questionid varchar(100) not null,
    answer varchar(200) not null,
    PRIMARY KEY(answerid),
    FOREIGN KEY(questionid) REFERENCES questions(questionid)
    FOREIGN KEY(userid) REFERENCES users(userid)
)`;
