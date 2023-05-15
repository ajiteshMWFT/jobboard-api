const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applicant',
        required: true
    },
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
        required: true
    },
    coverLetter: {
        type: String
    }

})

const Application = mongoose.model("Application", applicationSchema)

module.exports =  Application 