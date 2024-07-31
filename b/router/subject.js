const router = require('express').Router();

const { addSubject, subjectSearch, subjectDelete } = require('../controler/subject');

//-----------------------CATEGORY ROUTER---------------------------

router.post('/subject/create', addSubject);
router.get('/subject/find', subjectSearch);
router.delete('/subject/delete/:id',subjectDelete);

module.exports = router;