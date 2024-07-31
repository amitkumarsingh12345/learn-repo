const point = require('../models/points');

// --------------------------------POINT POST API-------------------------------------

const addPoint = async (req, res) => {
    await new point(req.body).save().
        then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};


// --------------------------------POINT POST API-------------------------------------

const findPoint = async (req, res) => {
    await point.find().
        then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};



// --------------------------------POINT DELETE API-------------------------------------

const deletePoint = async (req, res) => {
    await point.deleteOne({ _id: req.params.id }).
        then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};

module.exports = { addPoint, deletePoint, findPoint };