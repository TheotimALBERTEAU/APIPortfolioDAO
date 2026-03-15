module.exports = {
    getDAOSkills: () => {
        if (process.env.DB_MODE === 'mongoose') {
            const DAOSkillsMongoose = require(`./mongoose/daoskills-mongoose`);
            return new DAOSkillsMongoose();
        }
    },

    getDAOProjects: () => {
        if (process.env.DB_MODE === 'mongoose') {
            const DAOProjectsMongoose = require(`./mongoose/daoprojects-mongoose`);
            return new DAOProjectsMongoose();
        }
    }
}