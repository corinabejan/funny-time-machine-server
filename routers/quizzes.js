const { Router } = require("express");
const Quiz = require("../models").quiz;
const Place = require("../models").place;
const TimePeriod = require("../models").timePeriod;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const quiz = await Quiz.findAll({
      include: [Place, TimePeriod],
    });
    if (!quiz) {
      res.status(404).send({ message: "Quiz not found!" });
    }
    res.status(200).send({ message: "Quizzes found!", quiz });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(403).send({ message: "Missing parameters!" });
  }
  try {
    const quiz = await Quiz.findByPk(id, {
      include: [Place, TimePeriod],
    });
    if (!quiz) {
      res.status(404).send({ message: "Quiz not found!" });
    }
    res.status(200).send({ message: "Quizzes found!", quiz });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
