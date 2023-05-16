const express = require("express");
const { applicantAuth, confirmApplicant, recruiterAuth, confirmRecruiter, applicantDetails, companyDetails } = require("../controller/user-controller");

const applicantAuthMiddleware = require("../middleware/user-auth-middleware");
const recruiterAuthMiddleware = require("../middleware/recruiter-auth-middleware");
const router = express.Router();


router.post("/applicant-auth", applicantAuth)
router.get('/confirm-applicant', confirmApplicant)
router.post('/add-details/applicant', applicantAuthMiddleware, applicantDetails)


router.post("/recruiter-auth", recruiterAuth)
router.get('/confirm-recruiter', confirmRecruiter)
router.post('/add-details/compaany', recruiterAuthMiddleware, companyDetails)

module.exports = router;
