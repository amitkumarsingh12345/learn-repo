// ----------------TRAINING SCHEMA---------------------

const mongo = require('mongoose');
module.exports = new mongo.model('training', {
  trainingName: {
    type: String,
    unique: true,
    required: true
  },
  discription: String
}
)