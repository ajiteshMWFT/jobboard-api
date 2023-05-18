const Application = require("../model/application/application-model");
const Job = require("../model/jobs/job-openings-model");

const applyJob = async (req, res) => {
  const { applicant } = req;
  const { name } = req.body;
  const jobId = req.params.id;

  try {
    const alreadyAapplied = await Application.findOne({
      applicant: applicant._id,
      job: jobId,
    });

    if (alreadyAapplied !== null) {
      res.status(400).json({
        message: "You have already applied for this job",
      });
    } else {
      const applicantUser = Application.findById(applicant._id);
      const application = {
        job: jobId,
        applicant: applicantUser,
        recruiter: Job.company,
        coverLetter: req.body.coverLetter || "no cover-letter",
      };
      const newApplication = new Application(application);
      await newApplication.save();
      res.status(200).json({ message: "appliction sent succesfully" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllApplications = async (req, res) => {
  const recruiterUser = req.recruiter;
  const jobId = req.params.id;
  try {
    const applications = await Application.find({
      job: jobId,
      recruiter: recruiterUser._id,
    });
    res.status(200).json(applications);
  } catch (error) {
    console.log(error);
    res.status(500).json("semthing went wrong");
  }
};

const getApplication = async (req, res) => {};
module.exports = { applyJob, getApplication, getAllApplications };
