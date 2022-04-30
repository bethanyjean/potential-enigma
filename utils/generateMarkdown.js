// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.descriptionInput}
  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [Contributing](#Contributing)
  [Test](#Test)
  [License](#License)
  [Questions](#Questions)
  #Installation
  ${data.installationInput}
  #Usage
  ${data.usageInput}
  #Contributing
  ${data.contributionInput}
  #Test
  ${data.test-instructions}
  #License
  #Questions
`;
}

module.exports = generateMarkdown;
