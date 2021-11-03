const Person = require("../models/Person");

exports.create = async (req, res) => {
  //res.send("hello create person");
  try {
    const { name } = req.body;
    res.json(await new Person({ name }).save());
  } catch (err) {
    console.log(err);
    res.status(400).send("Create Person Failed");
  }
};
exports.list = async (req, res) => {
  res.send("hello list person");
};
exports.read = async (req, res) => {
  res.send("hello read person");
};
exports.update = async (req, res) => {
  res.send("hello update person");
};
exports.remove = async (req, res) => {
  res.send("hello remove person");
};
