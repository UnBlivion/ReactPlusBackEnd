const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');

const app = express();

app.use(expressMongoDb('mongodb://localhost/cadastros'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('static'));