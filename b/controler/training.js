
const training = require('../models/training');

// ------------------ADD TRANING API-----------------------

const addTraining = async (req, res) => {
    await new training(
        {
            trainingName: req.body.trainingName,
            discription: req.body.discription
        }
    ).save().then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
}

// ------------------TRANING GET API-----------------------

const findTraining = async (req, res) => {
    await training.find().
        then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};

// ------------------TRANING SEARCH API-----------------------

const searchTraining = async (req, res) => {
    await training.find(
        { _id: req.params.key }
    ).then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};

// ------------------TRANING DELETE API-----------------------

const deleteTraining = async (req, res) => {
    try {
        await training.findOne({ _id: req.params.id }).
            then((data) => deleteProductHandler(data.name))

        await training.deleteOne({ _id: req.params.id }).
            then((data) => res.status(200).send(data))
    } catch (error) {
        res.status(400).send(error);
    }
};

// ------------------TRANING UPDATE API-----------------------

const updateTraining = async (req, res) => {
    await training.updateOne(
        { _id: req.params.id },
        {
            $set: (req.body)
        }
    ).then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};

module.exports = { addTraining, findTraining, searchTraining, deleteTraining, updateTraining }