const mongoose = require('mongoose');

const Experience = mongoose.model(
    "Experience",
    {
        title: String,
        company: String,
        period: String,
        highlights: [String],
        technologies: [String]
    },
    'experiences'
);

module.exports = Experience;