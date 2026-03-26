const mongoose = require('mongoose');

const Skill = mongoose.model(
    "Skill",
    {
        title: String,
        skills:[{
            subtitle: String,
            logoPath: String
        }]
    },
    'skills'
);

module.exports = Skill;