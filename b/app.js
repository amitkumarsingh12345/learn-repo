// ----------------ALL ROUTERS---------------------

const express = require('express');
const app = express();
const mongo = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.port || 12000;
const user = require('./router/user');
const admin = require('./router/admin');
const training = require('./router/training');
const subject = require('./router/subject');
const chapter = require('./router/chapter');
const point = require('./router/point');
const cors = require('cors');
app.use(cors());

// ----------------DATABASE CONNECTION---------------------

mongo.connect('mongodb+srv://amitkumarsingh1482:amit1234@document.dkfjdwr.mongodb.net/document').
    then(() => console.log("DB Connected!!")).
    catch((err) => console.log({ "Error": err }));

app.use(bodyParser.json());

app.use('/api/v1', user);
app.use('/api/v2', admin);
app.use('/api/v3', training);
app.use('/api/v4', subject);
app.use('/api/v5', chapter);
app.use('/api/v6', point);

// ----------------SERVER CONNECTION---------------------

app.listen(port, () => console.log("Server Created !!"));