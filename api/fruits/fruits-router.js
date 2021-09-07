const express = require("express");
const Fruit = require("./fruits-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const all = await Fruit.getAll();
    res.json(all);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
try {
  const fruit = await Fruit.getBy(req.params.id)
  res.json(fruit)
} catch (error) {
  next(error)
}
});

router.post("/",  async (req, res, next) => {
  try {
    const inserted = await Fruit.postNew(req.body)
    res.status(201).json(inserted)
  } catch(error) {
    next(error)
  }
});

module.exports = router;
