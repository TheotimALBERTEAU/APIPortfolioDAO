const express = require("express");
const router = express.Router();
const skillsServices = require("../services/skill-services");

router.get("/", async (req, res) => {
    const serviceResponse = await skillsServices.getAll();
    console.log(serviceResponse);
    return res.json(serviceResponse);
})

module.exports = router;