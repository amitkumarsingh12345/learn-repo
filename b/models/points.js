// ----------------POINTS SCHEMA---------------------

const mongo = require('mongoose');
module.exports = new mongo.model('point', {
    pointName: String,
    definition: String,
    syntax: String,
    example: String,
    trainingName: String,
    subjectName: String,
    chapterName: String,
});
