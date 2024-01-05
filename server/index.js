// const express = require('express')
// const app = express()
// const port = 5000
// const mongoDB = require("./db")
// mongoDB();
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//Workking
// const express = require('express');
// const app = express();
// const port = 5000;

// // Import mongoose and the mongoDB function
// const mongoose = require('mongoose');
// const mongoDB = require('./db');
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// // Call the mongoDB function to connect to the database
// mongoDB();
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require('express');
const cors= require('cors');
const app = express();
app.use(cors());
const port = 5000;

// Import mongoose and the mongoDB function
const mongoose = require('mongoose');
const mongoDB = require('./db');
app.use((req,res,next)=>{
  res.setHeader("Acess-Control-Allow-Origin","http://localhost:3000");
  res.header(
  "Acess-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
);
next();
})
// Call the mongoDB function to connect to the database
mongoDB()
  .then(() => {
    console.log('MongoDB connected successfully');

    // Add your routes here
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    app.use(express.json())

    app.use('/api', require('./Routes/CreateUser'));

    // Start the server
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
