const chapter = require('../models/chapters');

// --------------------------------CHAPTER POST API-------------------------------------

const addChapter = async (req, res) => {
    await new chapter(req.body).save().
        then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};


// --------------------------------CHAPTER GET API-------------------------------------

const findChapter = async (req, res) => {
    await chapter.find().
        then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};


// --------------------------------CHAPTER DELETE API-------------------------------------

const deleteChapter = async (req, res) => {
    await chapter.deleteOne({ _id: req.params.id }).
        then(( data ) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};

module.exports = { addChapter, deleteChapter, findChapter };