const mariadb = require('mariadb');
const dotenv = require('dotenv'); 

dotenv.config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT),
});

async function DbConnection() {
    let con;
    try {
      con = await pool.getConnection();
      console.log("Connected to the database!");
   
    } catch (error) {
      console.error("Error connecting to the database:", error);
    } finally {
      if (con) con.end(); 
    }
}

module.exports = {
    pool,
    DbConnection 
};
