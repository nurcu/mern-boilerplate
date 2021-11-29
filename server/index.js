const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

// Express Routes
const positionRoute = require('./routes/position.route')
const pingRoute = require('./routes/ping.route')

const SERVER_PORT = process.env.SERVER_PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/positions', positionRoute);
app.use('/ping', pingRoute);


app.get('/info', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/info.html');
});
  
app.use((req, res) => {
    res.status(404).send('Not found');
});


app.listen(SERVER_PORT, () => {
    console.log("server runnig on port ", SERVER_PORT);
});
