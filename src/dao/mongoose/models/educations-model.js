const mongoose = require('mongoose');

const Education = mongoose.model(
    "Education",
    {
        degree: String,
        university: String,
        period: String,
        highlights: [String]
    },
    'educations'
);

module.exports = Education;