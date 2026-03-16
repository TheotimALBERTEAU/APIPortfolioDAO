const DAOFactory = require("../dao/dao-factory");

module.exports = {
    getAll: async () => {
        try {
            const Educations = await DAOFactory.getDAOEducations().selectAll();
            return {code : 200, message : "Showing all Educations", data : Educations};
        } catch (error) {
            return {code: "530", message : "Error while obtaining educations", data : error};
        }
    }
};