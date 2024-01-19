// TODO: Include packages needed for this application
const  inquirer  = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs')
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        name: 'github',
        type: 'input',
        message:'What is your GitHub username?'
    },
    {
        name: 'email',
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
        name: 'license',
        type: 'list',
        message:'What kind of license should your project have?',
        choices:['MIT_License', 'Apache_License_2.0', 'ISC_License', 'BSD3-Clause_"New"_or_"Revised"_License']
    },
    {
        name: 'dependency',
        type: 'input',
        message:'What command should be run to install dependencies?'
    },
    {
        name: 'test',
        type: 'input',
        message:'What command should be run to run tests?'
    },
    {
        name: 'usage',
        type: 'input',
        message:'What does the user need to know about using the repo?'
    },
    {
        name: 'contribute',
        type: 'input',
        message:'What does the user need to know about contributing to the repo?'
    },
    {
        name: 'color',
        type: 'list',
        message: 'Choose a color for your badge',
        choices:["blue", 'red', 'yellow', 'green']
    }
])
.then((data)=>{
    
    // TODO: Create a function to write README file
     fs.writeFile( './output/README.md' , generateMarkdown(data) ,(err) =>
        err ? console.error(err) : console.log('Success!')
    )
})