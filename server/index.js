const express = require("express");
require("./services/db");
const cors = require("cors");
const PositionModel = require("./models/position");
const positionSchema = require('./models/position');
const app = express();
const bodyParser = require('body-parser');

// Express Routes
const positionRoute = require('./routes/position.route')
//const pingRoute = require('./routes/ping.route')

const SERVER_PORT = process.env.SERVER_PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());


const sendData = (res, err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false, error: `${err.name}: ${err.message}` })
    }else {
      return res.status(200).json({ success: true, data: data })
    }
}
const sendId = (res, err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false, error: `${err.name}: ${err.message}` })
    } else if (!data) {
      return res.status(400).json({ success: false, error: "Warning: No data found." })
    } else {
      return res.status(200).json({ success: true, id: data._id })
    }
}


// CREATE Position
app.post('/positions', (req, res) => {
        positionSchema.create(req.body, (err, data) => {
        return sendId(res, err, data);
    })
});


app.get('/positions', (req, res) => {
    positionSchema.find((err, data) => {
      return sendData(res, err, data);
    })
});

app.put("/positions", async (req, res) => {
    const id = req.body.id;
    const portfolio = req.body.portfolio;
    const protocol = req.body.protocol;
    const asset = req.body.asset;
    const assetName = req.body.assetName;
    const assetType = req.body.assetType;
    try {
        await PositionModel.findById(id, (err, updatePosition) => {
            updatePosition.portfolio = portfolio;
            updatePosition.protocol = protocol;
            updatePosition.asset = asset;
            updatePosition.assetName = assetName;
            updatePosition.assetType = assetType;
            updatePosition.save();
            res.send("updated");
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete("/positions/:id", async (req, res) => {
    const id = req.params.id;
    await PositionModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.listen(4000, () => {
    console.log("server runnig on port 4000");
});
