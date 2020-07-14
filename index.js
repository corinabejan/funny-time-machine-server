require("dotenv").config();
const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const jsonParser = express.json();

const placesRouter = require("./routers/places");
const timePeriodsRouters = require("./routers/timePeriods");
const factsRouters = require("./routers/facts");

app.use(corsMiddleWare());
app.use(jsonParser);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/places", placesRouter);
app.use("/timeperiods", timePeriodsRouters);
app.use("/facts", factsRouters);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
