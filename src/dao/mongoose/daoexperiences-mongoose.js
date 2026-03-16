const Experience = require("./models/experiences-model");
const IDAOExperiences = require(`./models/experiences-model`);

class DAOExperiencesMongoose extends IDAOExperiences {

    async selectAll() {
        return await Experience.find();
    }
}

module.exports = DAOExperiencesMongoose;