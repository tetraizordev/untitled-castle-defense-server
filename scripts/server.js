/* Libraries */
require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes.js');

/* App setup */
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(apiRoutes);

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
    console.log("Server started successfully at port " + SERVER_PORT + "!");
});

app.all('/*', (req, res) => {
    res.status(404).send("404");

    console.log("Test");
});