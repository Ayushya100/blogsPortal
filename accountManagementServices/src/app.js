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
const getAllUsersInfo = require('../routes/userServicesRoutes/getAllUsersInfo');
const getUserDetails = require('../routes/userServicesRoutes/getUserDetails');
const updateUserDetails = require('../routes/userServicesRoutes/updateUserDetails');
const updateUserPassword = require('../routes/userServicesRoutes/updateUserPassword');
const updateUserRole = require('../routes/userServicesRoutes/updateUserRole');
const deactivateUser = require('../routes/userServicesRoutes/deativateUserService');
const deleteUser = require('../routes/userServicesRoutes/deleteUser');
const loginUser = require('../routes/userServicesRoutes/loginUser');
const addBlogsToUser = require('../routes/userServicesRoutes/addBlogsToUserService');

app.use(`${usersApi}/createUser`, createUser);
app.use(`${usersApi}/verify`, verifyAccount);
app.use(`${usersApi}/getAllUsersInfo`, getAllUsersInfo);
app.use(`${usersApi}/getUserDetails`, getUserDetails);
app.use(`${usersApi}/updateUserDetails`, updateUserDetails);
app.use(`${usersApi}/updateUserPassword`, updateUserPassword);
app.use(`${usersApi}/updateUserRole`, updateUserRole);
app.use(`${usersApi}/deactivateUser`, deactivateUser);
app.use(`${usersApi}/deleteUser`, deleteUser);
app.use(`${usersApi}/loginUser`, loginUser);
app.use(`${usersApi}/addBlogsToUser`, addBlogsToUser);

app.listen(port, () => {
    console.log(`Connection has been started at port: ${port}`);
});

module.exports = app;
