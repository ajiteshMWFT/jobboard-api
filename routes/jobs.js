const express = require("express");
const recruiterAuthMiddleware = require("../middleware/recruiter-auth-middleware");
const { addJob, getJobs, getSinglejob } = require("../controller/jobs-controller");

const router = express.Router()

router.post('/', recruiterAuthMiddleware, addJob)
router.get('/', getJobs)
router.get('/:id', getSinglejob)

module.exports = router;