const { Router } = require("express");
const TimePeriod = require("../models").timePeriod;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const timePeriod = await TimePeriod.findAll();
    if (!timePeriod) {
      res.status(404).send({ message: "Time Period not found!" });
    }
    res.status(200).send({ message: "Time Period found!", timePeriod });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const timePeriod = await TimePeriod.findByPk(id);
    if (!id) {
      res.status(403).send({ message: "Missing parameters!" });
    }
    res
      .status(200)
      .send({ message: "Required time period found!", timePeriod });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
