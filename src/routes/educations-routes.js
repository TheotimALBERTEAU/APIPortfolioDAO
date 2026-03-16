const express = require('express');
const router = express.Router();
const educationsServices = require('../services/educations-services');

router.get('/', async (req, res) => {
    const serviceResponse = await educationsServices.getAll();
    return res.json(serviceResponse);
})

module.exports = router;