'use strict';

import express from 'express';

const PORT = 5050;
const app = express();

app.get('/', (req, res) => {
  res.end('Hello world!');
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});