
const mongoose = require('mongoose');


const MONGO_DB_URI = process.env.MONGO_DB_URI;
console.log('Connecting to database...');



// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database successfully connected!')
},
  error => {
    console.error('Could not connect to database:', error)
  }
)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
