const express = require('express');
const path = require('path');
const app = express();

// Serve static assets from /public folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Utility to load HTML from views folder
const render = (page) => path.join(__dirname, '..', 'views', `${page}.html`);

// Define routes
app.get('/', (_, res) => res.sendFile(render('index')));
app.get('/about', (_, res) => res.sendFile(render('about')));
app.get('/experience', (_, res) => res.sendFile(render('experience')));
app.get('/achievements', (_, res) => res.sendFile(render('responsibilitiesAchievements')));
app.get('/contact', (_, res) => res.sendFile(render('contact')));
app.get('/blogs', (_, res) => res.sendFile(render('blogs')));
app.get('/education', (_, res) => res.sendFile(render('education&certification')));
app.get('/projects', (_, res) => res.sendFile(render('projects')));
app.get('/skills', (_, res) => res.sendFile(render('skills')));

module.exports = app;
