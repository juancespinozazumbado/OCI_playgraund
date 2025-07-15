require('dotenv').config();
const express = require('express');
//const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'API is running', apiKey: process.env.API_KEY });
});

//app.use('/users', usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server listening on port ${port} (API_KEY=${process.env.API_KEY})`)
);
