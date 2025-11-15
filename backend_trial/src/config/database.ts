import pg from 'pg'; //PostgreSQL client library w. Pool, Client, n other Utility.
import dotenv from 'dotenv'; // env. var. loader. Necessary for use of .env file

//Reads the .env file and load the var into process.env
dotenv.config();

const { Pool } = pg;
//The pool manages multiple database connections... 
//   Db request borrows the pools connection and reuse it, fast and cheaper than request handling through new connection each time. 
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
}); // Export const allows it to be used in other files.

//Event Listener that is processed when the pool makes successful connections. 
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});