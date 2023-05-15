const Job = require("../model/jobs/job-openings-model")


const addJob = async (req, res) => {
    try {
        const { recruiter } = req
        const { job_title, job_description, skills, salary } = req.body

        const job = {
            jobTitle: job_title,
            jobDescription: job_description,
            salary: salary,
            skills: skills,
            company: recruiter
        }
        const newJob = new Job(job)
        await newJob.save()
        res.status(201).json({ message: "job created" })
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }

}

const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find()
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).send('Server error');
    }

}

const getSinglejob = async (req, res) => {
    const jobId = req.params.id;
    try {
        const job = await Job.findById(jobId)
        if (!job) {
            res.status(404).json("no such job found")
        }
        res.status(200).json(job)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { addJob, getJobs, getSinglejob }
