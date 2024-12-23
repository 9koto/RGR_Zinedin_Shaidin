const Pool = require('pg').Pool

//connecting to the local database
const pool = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "electronic-database-for-football-tournaments",
});


module.exports = pool;
