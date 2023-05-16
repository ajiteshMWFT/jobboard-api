const Application = require("../model/application/application-model");
const Job = require("../model/jobs/job-openings-model");


const applyJob = async (req, res) => {
    const { applicant } = req
    const { name } = req.body
    const jobId = req.params.id;

    try {
        const alreadyAapplied = await Application.findOne({
            applicant: applicant._id,
            job: jobId,
        })

        if (alreadyAapplied !== null) {
            res.status(400).json({
                message: "You have already applied for this job",
            });
        } else {


            const job = await Job.findById(jobId)
            if (job === null) {
                res.status(404).json({
                    message: "Job does not exist",
                });
            }
            const application = {
                job: jobId,
                applicant: applicant,
                recruiter: job.company,
                coverLetter: req.body.coverLetter || "no cover-letter"
            }
            const newApplication = new Application(application)
            await newApplication.save()
            res.status(200).json({ message: "appliction sent succesfully" })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}
const getApplication = async(req, res) =>{

}
module.exports = { applyJob, getApplication }