// Function to render license badge based on the license type
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// Function to render license link based on the license type
function renderLicenseLink(license) {
  if (license) {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return '';
  }
}

// Function to render license section of README based on the license type
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.Description}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
${this.Installation}
  
  ## Usage
  
  ${this.Usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${this.Contributing}
  
  ## Tests
  
  ${this.Test}
  
  ## Questions
  
  ${this.Questions}
  
  `}; 

module.exports = generateMarkdown;
