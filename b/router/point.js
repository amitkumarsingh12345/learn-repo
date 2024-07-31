const router = require('express').Router();

const { addPoint, deletePoint, findPoint } = require('../controler/point');

//-----------------------TRAINING ROUTER---------------------------

router.post('/point/create', addPoint);
router.delete('/point/delete/:id', deletePoint);
router.get('/point/find', findPoint);

module.exports = router;