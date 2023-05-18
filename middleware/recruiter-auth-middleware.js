const jwt = require("jsonwebtoken");
const { JWTSECRET } = require("../config/envs");
const Recruiter = require("../model/recruiter/recruiter-model");

const recruiterAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decodedToken = jwt.verify(token, JWTSECRET);
    const userId = decodedToken.userId;

    const RecruiterUser = await Recruiter.findOne({ _id: userId });

    if (!RecruiterUser) {
      throw new Error("User not found");
    }

    req.recruiter = RecruiterUser;
    req.token = token;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send("Authentication failed");
  }
};

module.exports = recruiterAuthMiddleware;
