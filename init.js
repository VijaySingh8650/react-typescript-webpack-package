// init.js
const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

const sourceDir = path.join(__dirname, 'template');
const targetDir = process.cwd(); // Current working directory

ncp(sourceDir, targetDir, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Default files and folders created successfully!');
});
