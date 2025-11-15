import express, {type Express, type Request, type Response} from 'express'; 
// ^Main func for express app, ^TS type, ^HTTP REQUEST, ^HTTP RESPONSE, 
//    'type' keyword imports type not runtime code.
import cors from 'cors'; // Frontend and Backend communications. 
import dotenv from 'dotenv'; // Allows pools to do its work. 
import {pool} from './config/database.js'; //Import the pool with the db connection. 

dotenv.config(); // Always called before accessing environment variable.

const app: Express = express(); // Creates Express App Instance, app entire web server, TS type annotation, func to create app. 
//Has Methods .get() .post() .listen()

const PORT = process.env.PORT || 5000; // Set the server port, default to 5000 if no port from env or hosting platform. 

app.use(cors()); // Allows and handles requests. 
app.use(express.json()); // Intercept and parse JSON to JS object. Def. request body for JSON requests.

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'Welcome to PERN API' });
});
// Response to get request, '/' of url path, para 1: request object and para 2: response object,
// res.json -> will send JSON response

app.get('./api/test-db', async (req : Request, res: Response) => { //Async returns a promise, it is necessary to use await
	try {
		const result = await pool.query('SELECT NOW()'); // Wait for query to finish, Execute the SQL query, 
		// 'Postgresql func. that shows curr time ^'
		res.json({
			success:true,
			time: result.rows[0] // Query Results are in row arrays 
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ // This is an https status signaling an internal server error 
			success:false,
			error: "Connection to Database Failed"
		});
	}
})

app.listen(PORT, () => {
	console.log('Server is running on port ${PORT}');
});

// Replace the values for database to be different than what claude has originally gave as a template.
// Instead of id and member and such it will be 