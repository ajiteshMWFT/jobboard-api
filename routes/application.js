const express = require('express')
const applicantAuthMiddleware = require('../middleware/user-auth-middleware')
const { applyJob, getApplication } = require('../controller/application-controller')
const recruiterAuthMiddleware = require('../middleware/recruiter-auth-middleware')
const router = express.Router()

router.post('/jobs/:id/application', applicantAuthMiddleware, applyJob)
router.get('/jobs/:id/application/:applicationId', recruiterAuthMiddleware, getApplication)
module.exports = router