const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  try {
    const data = await ToDoModel.create({ text });
    console.log("Added Successfully...");
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully...."))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully...."))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports.toggleComplete = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await ToDoModel.findById(id);

    if (!todo) {
      return res.status(404).send("Todo not found");
    }

    todo.completed = !todo.completed;

    await todo.save();

    res.send(todo);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};