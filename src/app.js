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

const experiencesRouter = require('./routes/experiences-routes');
app.use('/experiences', experiencesRouter);

const educationsRouter = require('./routes/educations-routes');
app.use('/education', educationsRouter);

if (process.env.DB_MODE === 'mongoose') {
    require('./dao/mongoose/connection').connect_mongoose();
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
