const DAOFactory = require("../dao/dao-factory");

module.exports = {
    getAll: async () => {
        try {
            const Projects = await DAOFactory.getDAOProjects().selectAll();
            return {code : 200, message : "Showing all Projects", data : Projects};
        } catch (error) {
            return {code: "520", message : "Error while obtaining projects", data : error};
        }
    },

    getCategories: async () => {
        try {
            const Categories = await DAOFactory.getDAOProjects().selectCategories();
            return {code : "200", message : "Showing all Categories", data : Categories};
        } catch (error) {
            return {code: "521", message : "Error while obtaining categories", data : error};
        }
    },

    getByCategory: async (category) => {
        try {
            const ProjectFromCategory = await DAOFactory.getDAOProjects().selectByCategory(category);
            return {code : "200", message : `Showing projects from category : ${category}`, data : ProjectFromCategory};
        } catch (error) {
            return {code : "522", message : `Error while obtaining projects from category : ${category}`, data : error};
        }
    }
}