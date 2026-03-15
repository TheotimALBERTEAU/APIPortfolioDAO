const express = require("express");
const router = express.Router();
const projectsServices = require("../services/projects-services");

router.get("/", async (req, res) => {
    const serviceResponse = await projectsServices.getAll();
    return res.json(serviceResponse);
});

router.get("/categories", async (req, res) => {
    const serviceResponse = await projectsServices.getCategories();
    return res.json(serviceResponse);
});

router.get("/:category", async (req, res) => {
    const serviceResponse = await projectsServices.getByCategory(req.params.category)
    return res.json(serviceResponse);
})

module.exports = router;