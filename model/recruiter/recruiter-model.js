const mongoose = require("mongoose")

const recruiterSchema = new mongoose.Schema({
    companyName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    compnayDescription: {
        type: String,
    },
    companyImages: [{
        type: String
    }],
    companyLogo: {
        type: String
    },
    companyLocation: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
    },
    confirmationToken: {
        type: String,
    },
    ConfirmationTokenExpiration: {
        type: Date,
    },
    isEmailConfirmed: {
        type: Boolean,
        default: false
    }

})
const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;