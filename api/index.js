const express = require('express');
const path = require('path');
const app = express();

// Static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
});
app.get('/experience', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'experience.html'));
});
app.get('/achievements', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'responsibilitiesAchievements.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
});
app.get('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'blogs.html'));
});
app.get('/education', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'education&certification.html'));
});
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'projects.html'));
});
app.get('/skills', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'skills.html'));
});

// Vercel expects a handler export
module.exports = app;
