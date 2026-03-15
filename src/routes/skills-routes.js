const express = require("express");
const router = express.Router();
const skillsServices = require("../services/skills-services");

router.get("/", async (req, res) => {
    const serviceResponse = await skillsServices.getAll();
    return res.json(serviceResponse);
})

module.exports = router;