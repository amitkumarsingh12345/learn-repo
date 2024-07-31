// ----------------CHAPTER SCHEMA---------------------

const mongo = require('mongoose');
module.exports = new mongo.model('chapter', {
   chapterName: String,
   subjectName: String,
   trainingName: String,
   video: String,
   date: {
      type: String,
      default: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
   },
   time: {
      type: String,
      default: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
   }
}
)


