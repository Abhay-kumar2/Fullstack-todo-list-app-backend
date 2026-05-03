const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/ToDoRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use(routes);

// database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected To MongoDB...'))
  .catch((err) => console.log(err));

// start server
app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
