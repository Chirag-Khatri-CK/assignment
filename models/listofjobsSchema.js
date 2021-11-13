const mongoose = require("mongoose");

const listOfJobSchema = new mongoose.Schema({
  jobname: {
    type: String,
    // required: true,
  },
  jobrequisitionid: {
    type: String,
    // required: true,
  },
  jobtitle: {
    type: String,
    // required: true,
  },
  jobdescription: {
    type: String,
    // required: true,
  },
});

// creating collection
const ListOfJobs = new mongoose.model("ListOfJobs", listOfJobSchema);

module.exports = ListOfJobs;
