const Person = require("../models/Person");
const fs = require("fs");

exports.create = async (req, res) => {
  try {
    const { data } = req.body;
    // console.log(req.body.data);
    const newData = {
      name: data,
      pic: req.file.filename,
    };
    res.json(await new Person(newData).save());
  } catch (err) {
    console.log(err);
    res.status(400).send("Create Person Failed");
  }
};
exports.list = async (req, res) => {
  res.json(await Person.find({}).sort({ createdAt: -1 }).exec());
};
exports.read = async (req, res) => {
  const persons = await Person.findOne({ _id: req.params.id }).exec();
  res.json(persons);
};
exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Person.findOneAndUpdate(
      { _id: req.params.id },
      { name: name },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Update Person Failed");
  }
};
exports.remove = async (req, res) => {
  try {
    const deleted = await Person.findOneAndDelete({ _id: req.params.id });
    await fs.unlink(`./public/uploads/${deleted.pic}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("remove success");
      }
    });
    res.json(deleted);
  } catch (err) {
    console.log(err);
    res.status(400).send("Remove Person Failed");
  }
};
