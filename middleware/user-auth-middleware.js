const jwt = require("jsonwebtoken");
const { JWTSECRET } = require("../config/envs");
const Applicant = require("../model/applicant/applicant-model");

const applicantAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decodedToken = jwt.verify(token, JWTSECRET);
    const userId = decodedToken.userId;

    const ApplicantUser = await Applicant.findOne({ _id: userId });

    if (!ApplicantUser) {
      throw new Error("User not found");
    }

    req.applicant = ApplicantUser;
    req.token = token;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send("Authentication failed");
  }
};

module.exports = applicantAuthMiddleware;
