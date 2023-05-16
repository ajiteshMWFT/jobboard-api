const mongoose = require("mongoose");


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
    experience: [{
        company: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date
        },
        description: {
            type: String
        }
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