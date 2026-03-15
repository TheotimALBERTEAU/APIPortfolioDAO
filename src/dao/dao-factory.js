module.exports = {
    getDAOSkills: () => {
        if (process.env.DB_MODE === 'mongoose') {
            const DAOSkillsMongoose = require(`./mongoose/daoskills-mongoose`);
            return new DAOSkillsMongoose();
        }
    }
}