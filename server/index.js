const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();
app.use(express.json());

const { CONNECTION_STRING } = process.env;


const port = 4000;
app.listen(port, () => console.log(`server listening on ${port}`));