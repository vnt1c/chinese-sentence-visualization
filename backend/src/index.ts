import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import type { Todo } from '../../shared/index.js'; // <-- IMPORT SHARED TYPE
 // <-- IMPORT SHARED TYPE
//General Idea Format
/*

const app = express(); const PORT = process.env.PORT || 4000;

// DB connection (same as before) const pool = new Pool({ user: 'postgres', host: 'localhost', database: 'my_app_db', password: 'your_password', port: 5432, });

// Middleware app.use(cors()); app.use(express.json());

// Routes app.get('/api/todos', async (req: Request, res: Response) => { try { // The 'Todo' type is applied here const allTodos = await pool.query('SELECT * FROM todo'); res.json(allTodos.rows); } catch (err) { console.error(err.message); } });

// Start server app.listen(PORT, () => { console.log(Server is running on http://localhost:${PORT}); }); 

*/