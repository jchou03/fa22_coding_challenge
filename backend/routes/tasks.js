const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    // const tasks = await Task.find();
    // res.send(tasks);
    res.send("welcome to my app!")
  } catch (error) {
    res.send(error);
  }
});

/* CREATE 'PUT' REQUEST */
// router.put("/", async (req, res) => {
//   try{

//   }catch (error){
//     res.send(error)
//   }
// })

/* CREATE 'DELETE' REQUEST */
// router.delete()

module.exports = router;
