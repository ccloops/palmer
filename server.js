const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const projectsData = require('./assets/projects.json');

express()
  .use(express.static('dist'))
  .get('/projects', (req, res) => {
    res.send(JSON.stringify(projectsData.list));
  })
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
  })
  .listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));