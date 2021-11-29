const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PositionModel = require("./models/position");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb://localhost:27017/curcumy05",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.post("/positions", async (req, res) => {
    const portfolio = req.body.portfolio;
    const protocol = req.body.protocol;
    const asset = req.body.asset;
    const assetName = req.body.assetName;
    const assetType = req.body.assetType
    const position = new PositionModel({portfolio: portfolio, asset: asset, protocol: protocol, assetType: assetType});

    try {
        await position.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

app.get("/positions", async (req, res) => {
    PositionModel.find({}, (err, results) => {
        if (err) {
            res.send(err);
        }

        res.send(results);
    });
});

app.put("/positions", async (req, res) => {
    const id = req.body.id;
    const portfolio = req.body.portfolio;
    const protocol = req.body.protocol;
    const asset = req.body.asset;
    const assetType = req.body.assetType;
    try {
        await PositionModel.findById(id, (err, updatePosition) => {
            updatePosition.portfolio = portfolio;
            updatePosition.protocol = protocol;
            updatePosition.asset = asset;
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
