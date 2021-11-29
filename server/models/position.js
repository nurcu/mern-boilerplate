
const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
    positionPortfolio: {
        type: String,
    },
    positionProtocol: {
        type: String
    },
    positionAsset: {
        type: String,
    },
    positionAssetType: {
        type: String
    }
});

const Position =  mongoose.model("Position", PositionSchema);
module.exports = Position; 