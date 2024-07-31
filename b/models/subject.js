// ----------------SUBJECT SCHEMA---------------------

const mongo = require('mongoose');
module.exports = new mongo.model('subject', {
    subjectName: {
        type: String
    },
    trainingName: String
});

