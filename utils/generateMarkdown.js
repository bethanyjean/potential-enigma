// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0': return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    break;
    case 'Boost': return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    break;
    case 'BSD': return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    break;
    case 'Eclipse': return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
    break;
    case 'IBM': return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    break;
    case 'MIT': return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    break;
    case 'Mozilla': return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    break;
    default: return '';
  }      
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0': return 'https://opensource.org/licenses/Apache-2.0';
    break;
    case 'Boost': return 'https://www.boost.org/LICENSE_1_0.txt';
    break;
    case 'BSD': return 'https://opensource.org/licenses/BSD-3-Clause';
    break;
    case 'Eclipse': return 'https://opensource.org/licenses/EPL-1.0';
    break;
    case 'IBM': return 'https://opensource.org/licenses/ISC';
    break;
    case 'MIT': return 'https://opensource.org/licenses/MIT';
    break;
    case 'Mozilla': return 'https://opensource.org/licenses/MPL-2.0';
    break;
    default: return '';
  }    
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license != 'None') {
      var link = renderLicenseLink(license);
    return  `For more information on the license governing this project, please visit: ${link}`;
    } else {
    return '';
    }
}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}  
  ## Table of contents

  <!--ts-->
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [License](#License)
  * [Questions](#Questions)
  <!--te-->

  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contributing
  ${data.contribution}
  # Test
  ${data.testInstructions}
  # License
  ${renderLicenseSection(data.license)}
  # Questions
  Please e-mail with any questions regarding this project: ${data.email}  
  Or find the GitHub Link: ${data.link}
`;
}

