const Project = require("./models/projects-model");
const IDAOProjects = require(`./models/projects-model`);

class DAOProjectsMongoose extends IDAOProjects {

    async selectAll() {
        return await Project.find();
    }

    async selectCategories() {
        return await Project.distinct('category');
    }

    async selectByCategory(category) {
        return await Project.find({ category: category });
    }
}

module.exports = DAOProjectsMongoose;