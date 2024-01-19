// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
console.log(data);
return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contributing](#contributing)

## Installation

${data.dependency}

## Usage

${data.usage}


## Credits

[${data.github}](${data.github})

## License

${data.license}

## Badges

![${data.license}](https://img.shields.io/badge/${data.license}-latest-${data.color})

## How to Contribute

${data.contribute} [${data.email}](${data.email})

## Tests

${data.test}`

}

module.exports = generateMarkdown;
