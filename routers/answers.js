const { Router } = require("express");
const Answer = require("../models").answer;
const Quiz = require("../models").quiz;
const router = new Router();

router.post("/", async (req, res, next) => {
  const { quizId, answer } = req.body;
  if (!answer || !quizId) {
    res.status(403).send({ message: "Missing parameters!" });
  }
  try {
    const answers = await Answer.create({
      quizId,
      answer,
    });
    res.status(200).send({ message: "Answer created!", answers });
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const answers = await Answer.findAll({
      include: [Quiz],
    });
    if (!answers) {
      res.status(404).send({ message: "Answers not found!" });
    }
    res.status(200).send({ message: "Your answers were found!", answers });
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
    const answers = await Answer.findByPk(id, {
      include: [Quiz],
    });
    if (!answers) {
      res.status(404).send({ message: "Answers not found!" });
    }
    res.status(200).send({ message: "Your answers were found!", answers });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
