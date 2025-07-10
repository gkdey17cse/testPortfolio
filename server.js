const express = require('express');
const path = require('path');
const majorProjects = require('./public/data/majorProjects')
const minorProjects = require('./public/data/minorProjects')
const experience = require('./public/data/experience')
const education = require('./public/data/education')
const certificate = require('./public/data/certificates')
const skills = require('./public/data/skills')
const achievements = require('./public/data/achievements')
const responsibilities = require('./public/data/responsibilities')
const app = express();

//  Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

//  Routes using res.render
app.get('/', (_, res) => res.render('index'));
app.get('/about', (_, res) => res.render('about'));
app.get('/experience', (_, res) => res.render('experience', { experiences: experience }));
app.get('/achievements', (_, res) => res.render('responsibilitiesAchievements', { responsibilities: responsibilities, achievements: achievements }));
app.get('/contact', (_, res) => res.render('contact'));
app.get('/blogs', (_, res) => res.render('blogs'));
app.get('/education', (_, res) => res.render('education&certification', { educations: education, certificates: certificate }));
app.get('/projects', (_, res) => res.render('projects', { majorProjects: majorProjects, minorProjects: minorProjects }));
app.get('/skills', (_, res) => res.render('skills', { skills: skills }));

//  Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
