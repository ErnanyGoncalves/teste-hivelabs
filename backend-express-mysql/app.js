const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user-routes');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.listen(8000, () => {
    console.log("Connected to localhost:8000");
});