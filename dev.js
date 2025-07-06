const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
const render = (page) => path.join(__dirname, 'views', `${page}.html`);

app.get('/', (_, res) => res.sendFile(render('index')));
app.get('/about', (_, res) => res.sendFile(render('about')));
app.get('/experience', (_, res) => res.sendFile(render('experience')));
app.get('/achievements', (_, res) => res.sendFile(render('responsibilitiesAchievements')));
app.get('/contact', (_, res) => res.sendFile(render('contact')));
app.get('/blogs', (_, res) => res.sendFile(render('blogs')));
app.get('/education', (_, res) => res.sendFile(render('education&certification')));
app.get('/projects', (_, res) => res.sendFile(render('projects')));
app.get('/skills', (_, res) => res.sendFile(render('skills')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Local server running at http://localhost:${PORT}`);
});
