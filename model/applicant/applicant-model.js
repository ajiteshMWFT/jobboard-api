const mongoose = require("mongoose");
const Education = require("./applicant-edu-model");

const applicantSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,

    },
    skills: [{
        type: String,
    }],
    location: {
        city: String,
        state: String,
        country: String
    },
    education: [{
        degree: {
            type: String,
            
        },
        fieldOfStudy: {
            type: String,
           
        },
        school: {
            type: String,
            
        },
        startDate: {
            type: Date,
        
        },
        endDate: {
            type: Date,
            
        },
        description: {
            type: String,
            
        },
    }],
    description: {
        type: String,
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

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;