const fs = require('fs-extra');
const path = require('path');

// Define the template directory path
const templateDir = path.join(__dirname, 'template');

// Define the destination directory path (e.g., the user's project directory)
const destinationDir = process.cwd(); // Current working directory where the user ran `npm init`

// Copy the template directory into the destination directory
fs.copy(templateDir, destinationDir, (err) => {
  if (err) {
    console.error('Error copying template directory:', err);
  } else {
    console.log('Template directory copied successfully!');
  }
});
