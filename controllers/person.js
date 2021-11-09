const Person = require("../models/Person");

exports.create = async(req, res) => {
    try {
        const { name } = req.body;
        res.json(await new Person({ name }).save());
    } catch (err) {
        console.log(err);
        res.status(400).send("Create Person Failed");
    }
};
exports.list = async(req, res) => {
    res.json(await Person.find({}).sort({ createdAt: -1 }).exec());
};
exports.read = async(req, res) => {
    const persons = await Person.findOne({ _id: req.params.id }).exec();
    res.json(persons);
};
exports.update = async(req, res) => {
    res.send("hello update person");
};
exports.remove = async(req, res) => {
    try {
        const deleted = await Person.findOneAndDelete({ _id: req.params.id });
        res.json(deleted);
    } catch (err) {
        console.log(err);
        res.status(400).send("Remove Person Failed");
    }
};