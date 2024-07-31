const router = require('express').Router();

const {
    addTraining,
    findTraining,
    searchTraining,
    deleteTraining,
    updateTraining
} = require('../controler/training');

//-----------------------TRAINING ROUTER---------------------------

router.post('/training/create', addTraining);
router.get('/training/find', findTraining);
router.get('/training/search/:key', searchTraining);
router.delete('/training/delete/:id', deleteTraining);
router.put('/training/update/:id', updateTraining);

module.exports = router;