const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

// Adding Middlewares - Cors
app.use(cors());
app.use(bodyparser.json());

// Adding required connection
require('../connections/dbConnection');

// Port No and API
const port = process.env.port || 3200;
const usersApi = '/api/v1/users';
const privilegesApi = '/api/v1/privileges';

// Routes
const createUser = require('../routes/userServicesRoutes/createUser');
const verifyAccount = require('../routes/userServicesRoutes/verifyAccount');

app.use(`${usersApi}/createUser`, createUser);
app.use(`${usersApi}/verify`, verifyAccount);

app.listen(port, () => {
    console.log(`Connection has been started at port: ${port}`);
});

module.exports = app;
