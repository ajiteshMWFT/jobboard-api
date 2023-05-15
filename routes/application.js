const express = require('express')
const applicantAuthMiddleware = require('../middleware/user-auth-middleware')
const { applyJob } = require('../controller/application-controller')
const router = express.Router()

router.post('/jobs/:id/application', applicantAuthMiddleware, applyJob)
module.exports = router