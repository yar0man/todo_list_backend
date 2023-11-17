'use strict';

import express from 'express';
import cors from 'cors';
import { connect } from './utils/db-setup';
import { todosRouter } from './routes/todos.route';

const PORT = 5050;
const app = express();
connect()

app.use(cors());

app.use('/todos', express.json(), todosRouter);

app.get('/', (req, res) => {
  res.end('Hello world!');
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});