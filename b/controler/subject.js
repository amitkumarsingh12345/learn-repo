const subject = require('../models/subject');

// ---------------------------------SUBJECT POST API--------------------------------------------

const addSubject = async (req, res) => {
    const newsubject = new subject(req.body);
    const savedsubject = await newsubject.save();
    res.status(200).json(savedsubject);
};


// ------------------SUBJECT SEARCH API-----------------------

const subjectSearch = async (req, res) => {
    await subject.find().
        then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};

// ------------------SUBJECT DELETE API-----------------------

const subjectDelete = async (req, res) => {
  await subject.deleteOne({ _id: req.params.id }).
        then((data) => res.status(200).send(data)).
        catch((error) => res.status(400).send(error));
};


module.exports = { addSubject, subjectSearch, subjectDelete }