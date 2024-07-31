const router = require('express').Router();
const { addChapter, deleteChapter, findChapter } = require('../controler/chapter');

//-----------------------CHAPTER ROUTER---------------------------

router.post('/chapter/create', addChapter);
router.delete('/chapter/delete/:id', deleteChapter);
router.get('/chapter/find', findChapter);

module.exports = router;