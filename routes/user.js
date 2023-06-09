const express = require("express");
const {
  applicantAuth,
  confirmApplicant,
  recruiterAuth,
  confirmRecruiter,
  applicantDetails,
  companyDetails,
  uploadResume,
} = require("../controller/user-controller");

const applicantAuthMiddleware = require("../middleware/user-auth-middleware");
const recruiterAuthMiddleware = require("../middleware/recruiter-auth-middleware");
const { uploader } = require("../config/helpers");
const router = express.Router();

router.post("/applicant-auth", applicantAuth);

router.get("/confirm-applicant", confirmApplicant);

router.post(
  "/add-details/applicant",
  applicantAuthMiddleware,
  applicantDetails
);

router.post(
  "/upload-resume",
  applicantAuthMiddleware,
  uploader.single("image"),
  uploadResume
);

router.post("/recruiter-auth", recruiterAuth);
router.get("/confirm-recruiter", confirmRecruiter);


router.post("/add-details/company", recruiterAuthMiddleware, companyDetails);

module.exports = router;
