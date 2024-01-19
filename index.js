// TODO: Include packages needed for this application
const  inquirer  = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs')
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        name: 'GitHub',
        type: 'input',
        message:'What is your GitHub username?'
    },
    {
        name: 'Email',
        type: 'input',
        message:'What is your email address?'
    },
    {
        name: 'title',
        type: 'input',
        message:'What is the name of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message:'Please write a short description of your project'
    },
    {
        name: 'licenses',
        type: 'checkbox',
        message:'What kind of license should your project have?',
        choices:[]
    },
    {
        name: 'dependencies',
        type: 'input',
        message:'What command should be run to install dependencies?'
    },
    {
        name: 'tests',
        type: 'input',
        message:'What command should be run to run tests?'
    },
    {
        name: 'uses',
        type: 'input',
        message:'What does the user need to know about using the repo?'
    },
    {
        name: 'contribute',
        type: 'input',
        message:'What does the user need to know about contributing to the repo?'
    },
])
.then((data)=>{
    const README = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
    // TODO: Create a function to write README file
     fs.writeToFile( README , JSON.stringify(data, null, '\t'), (err) =>
        err ? console.error(err) : console.log('Success!')
    )
})


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
