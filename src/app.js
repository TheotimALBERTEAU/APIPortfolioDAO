require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const skillsRouter = require('./routes/skills-routes');
app.use('/skills', skillsRouter);

const projectsRouter = require('./routes/projects-routes');
app.use('/projects', projectsRouter);

if (process.env.DB_MODE === 'mongoose') {
    require('./dao/mongoose/connection').connect_mongoose();
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
