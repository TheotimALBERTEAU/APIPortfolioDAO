const Skill = require("./models/skills-model");
const IDAOSkills = require(`./models/skills-model`);

class DAOSkillsMongoose extends IDAOSkills {

    async selectAll() {
        return await Skill.find();
    }
}

module.exports = DAOSkillsMongoose;