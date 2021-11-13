const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;
const listOfJobsRouter = require("./routers/jobs/listjobs");

//Connection with database
require("./db/conn");
const listOfJob = require("./models/listofjobsSchema");

app.use(express.json());
app.use(listOfJobsRouter);


app.listen(port, () => {
  console.log(`connection is settle at ${port}`);
});
