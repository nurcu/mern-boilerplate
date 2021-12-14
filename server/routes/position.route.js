const express = require('express');
require("../services/db");
const router = express.Router();

// Position Model
const positionSchema = require('../models/position');

const sendData = (res, err, data) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ success: false, code: 1005, message: `${err.name}: ${err.message}` })
    } else {
      return res.status(200).json({ success: true, data: data })
    }
}
const sendId = (res, err, data) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ success: false, code: 1005, message: `${err.name}: ${err.message}` })
    } else if (!data) {
      return res.status(400).json({ success: false, code: 1004, message: "Warning: No data found." })
    } else {
      return res.status(200).json({ success: true, id: data._id })
    }
}


// CREATE Position
router.post('/', (req, res) => {
  positionSchema.create(req.body, (err, data) => {
      return sendId(res, err, data);
  })
});

// READ Positions
router.get('/', (req, res) => {
  positionSchema.find((err, data) => {
    return sendData(res, err, data);
  })
});

// Get Single Position
router.get('/:id', (req, res) => {
  positionSchema.findById(req.params.id, (err, data) => {
    return sendData(res, err, data);
  })
});


// Update Position
router.put('/:id', (req, res) => {
  positionSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, data) => {
    return sendId(res, err, data);
  })
})

// Delete Position
router.delete('/:id', (req, res) => {
  positionSchema.findByIdAndRemove(req.params.id, (err, data) => {
    return sendId(res, err, data);
  })
})


module.exports = router;