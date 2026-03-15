const DAOFactory = require("../dao/dao-factory");

module.exports = {
    getAll: async () => {
        try {
            const Skills = await DAOFactory.getDAOSkills().selectAll();
            return {code : "200", message : "Showing all Skills", data : Skills};
        } catch (error) {
            return {code: "510", message : "Error while obtaining skills", data : error};
        }
    }
}