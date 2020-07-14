const { Router } = require("express");
const Fact = require("../models").fact;
const Place = require("../models").place;
const TimePeriod = require("../models").timePeriod;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const facts = await Fact.findAll({
      include: [Place, TimePeriod],
    });
    if (!facts) {
      res.status(404).send({ message: "Facts not found" });
    }
    res.status(200).send({ message: "Facts found!", facts });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const facts = await Fact.findByPk(id, {
      include: [Place, TimePeriod],
    });
    if (!id || !facts) {
      res.status(403).send({ message: "Missing parameters!" });
    }
    res.status(200).send({ message: "The required fact was found!", facts });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
