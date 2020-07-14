const { Router } = require("express");
const Place = require("../models").place;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const places = await Place.findAll();
    if (!places) {
      res.status(404).send({ message: "There was no place found!" });
    }
    res.status(200).send({ messgae: "Places found!", places });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(403).send({ message: "Missing paramaters!" });
  }
  try {
    const places = await Place.findByPk(id);
    if (!places) {
      res.status(404).send({ message: "There was no place found!" });
    }
    res.status(200).send({ messgae: "Places found!", places });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
