const Education = require("./models/educations-model");
const IDAOEducations = require(`./models/educations-model`);

class DAOEducationsMongoose extends IDAOEducations {

    async selectAll() {
        return await Education.find();
    }
}

module.exports = DAOEducationsMongoose;