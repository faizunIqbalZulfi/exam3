const express = require("express");

const movieRouter = require("./routers/movieRouter");
const categoryRouter = require("./routers/categoryRouter");
const movcatRouter = require("./routers/movcatRouter");

const app = express();
const port = 2010;

app.use(express.json());
app.use(movieRouter);
app.use(categoryRouter);
app.use(movcatRouter);

app.listen(port, () => {
  console.log("running at", port);
});
