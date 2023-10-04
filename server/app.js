const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const path = require('path');
const cors = require('cors');
const mongoose = require("mongoose");
const employeeRouter = require('./routes/employeeRoutes');

// Creating express object
const app = express();


app.use(cors());
// Applying body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rendering frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/authenticate.html'));
});


app.get('/employees.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/employees.html'));
});

//Employee CRUD Routers
app.use('/api', employeeRouter);


const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017"
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
