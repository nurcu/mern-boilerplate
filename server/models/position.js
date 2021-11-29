
const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
    portfolio: {
        type: String,
        required: true
    },
    protocol: {
        type: String,
        required: true
    },
    asset: {
        type: String,
        required: true
    },
    assetName: {
        type: String
    },
    assetType: {
        type: String,
        enum: ['token', 'pool']
    }
});

PositionSchema.index({portfolio: 1, protocol: 1, asset: 1}, {unique: true});

const Position =  mongoose.model("Position", PositionSchema);
module.exports = Position; 