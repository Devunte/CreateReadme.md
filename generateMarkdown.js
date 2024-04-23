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
  
${data.Installation}
  
  ## Usage
  
  ${data.Usage}
  
  ## License
  
  ${data.License}
  
  ## Contributing
  
  ${data.Contributing}
  
  ## Tests
  
  ${data.Test}
  
  ## Questions
  
  ${data.Questions}
  
  `}; 

module.exports = generateMarkdown;
