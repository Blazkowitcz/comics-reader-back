const express = require('express');
const fileUpload = require('express-fileupload');
const config = require('./config.json');
const bodyParser = require('body-parser');
const cors = require('cors');
const InitiateMongoServer = require('./app/modules/database.module');
const app = express();

InitiateMongoServer();

app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.listen(config.port || 3000, function() {});