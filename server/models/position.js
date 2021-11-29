
const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
    positionPortfolio: {
        type: String,
        required: true
    },
    positionProtocol: {
        type: String,
        required: true
    },
    positionAsset: {
        type: String,
        required: true
    },
    positionAssetType: {
        type: String,
        enum: ['token', 'pool']
    }
});

PositionSchema.index({positionPortfolio: 1, positionProtocol: 1, positionAsset: 1}, {unique: true});

const Position =  mongoose.model("Position", PositionSchema);
module.exports = Position; 