const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
  },
  skills: [
    {
      type: String,
    },
  ],
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recruiter",
  },
});
JobSchema.index({ "$**": "text" });
const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
