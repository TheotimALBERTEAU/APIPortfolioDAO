const DAOFactory = require("../dao/dao-factory");

module.exports = {
    getAll: async () => {
        try {
            const Experiences = await DAOFactory.getDAOExperiences().selectAll();
            return {code : "200", message : "Showing all Experiences", data : Experiences};
        } catch (error) {
            return {code: "530", message : "Error while obtaining experiences", data : error};
        }
    }
};