// // require('dotenv').config();
// // const express = require('express');
// // //const usersRouter = require('./routes/users');

// // const app = express();
// // app.use(express.json());

// // app.get('/', (req, res) => {
// //   res.send({ message: 'API is running', apiKey: process.env.API_KEY });
// // });

// // //app.use('/users', usersRouter);

// // const port = process.env.PORT || 3000;
// // app.listen(port, () =>
// //   console.log(`Server listening on port ${port} (API_KEY=${process.env.API_KEY})`)
// // );


// const express = require('express');
// const oracledb = require('oracledb');
// const path = require('path');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 4000;


// process.env.TNS_ADMIN = path.join(__dirname, 'wallet');;

// // async function testConnection_local() {
// //   try {
// //     const connection = await oracledb.getConnection({
// //       user: process.env.DB_USER,
// //       password: process.env.DB_PASSWORD,
// //       connectString: process.env.DB_CONNECT_STRING
// //     });
// //     const result = await connection.execute('SELECT 1 FROM DUAL');
// //     console.log('Oracle DB connected:', result.rows);
// //     await connection.close();
// //   } catch (err) {
// //     console.error('Oracle DB connection error:', err);
// //   }
// // }

// app.get('/', async (req, res) => {
//   try {
//     var result = await testConnection();
//     res.send('API connected to Oracle DB!' + JSON.stringify(result));
//   } catch (err) {
//     console.error('Error in / route:', err);
//     res.status(500).send('Error connecting to Oracle DB');
//   }
// });

// app.listen(port, () => {
//   console.log(`API listening on port ${port}`);
// });


// // async function testConnection() {
// //   try {
// //     const connection = await oracledb.getConnection({
// //       user: process.env.DB_USER,           // e.g., 'ADMIN'
// //       password: process.env.DB_PASSWORD,   // your ATP password
// //       connectString: process.env.DB_CONNECT_STRING // e.g., 'your_db_high'
// //     });
// //     const result = await connection.execute('SELECT 1 FROM DUAL');
// //     console.log('Oracle ATP connected:', result.rows);
// //     await connection.close();
// //     return result;
// //   } catch (err) {
// //     console.error('Oracle ATP connection error:', err);
// //     return { error: 'Connection failed', details: err.message };
// //   }
// // }




// src/app.js
const express = require('express');
const chatRoute = require('./routes/chat.routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/chat', chatRoute);

// centralized error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
