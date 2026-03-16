const express = require('express');
const router = express.Router();
const experiencesServices = require('../services/experiences-services');

router.get('/', async (req, res) => {
    const serviceResponse = await experiencesServices.getAll();
    return res.json(serviceResponse);
})

module.exports = router;