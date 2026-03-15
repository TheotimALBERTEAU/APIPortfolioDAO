const mongoose = require('mongoose');

const Project = mongoose.model(
    "Project",
    {
        title: String,
        description: String,
        category: String,
        isFeatured: Boolean,
        imgPath: String,
        technologies: [String],
        sourceCodeUrl: String
    },
    'projects'
);

module.exports = Project;