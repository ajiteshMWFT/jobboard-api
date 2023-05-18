const express = require("express");
const recruiterAuthMiddleware = require("../middleware/recruiter-auth-middleware");
const { addJob, getJobs, getSinglejob, getJobsByFilters } = require("../controller/jobs-controller");

const router = express.Router()

router.post('/', recruiterAuthMiddleware, addJob)
router.get('/', getJobsByFilters)
router.get('/:id', getSinglejob)
// router.get()

module.exports = router;