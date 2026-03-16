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
    },

    getDAOExperiences: () => {
        if (process.env.DB_MODE === 'mongoose') {
            const DAOExperiencesMongoose = require(`./mongoose/daoexperiences-mongoose`);
            return new DAOExperiencesMongoose();
        }
    },

    getDAOEducations: () => {
        if (process.env.DB_MODE === 'mongoose') {
            const DAOEducationsMongoose = require(`./mongoose/daoeducations-mongoose`);
            return new DAOEducationsMongoose();
        }
    }
}