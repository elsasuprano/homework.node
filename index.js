const inq = require('inquirer'); 
// const chalk = require('chalk'); 
const fs = require('fs');

const questions= [
  {
    type: 'input',
    name: 'title', 
    message: 'What is the title of your project?', 
  },
  {
    type: 'input',
    name: 'description', 
    message: 'What is the project all about?', 
  },
  {
    type: 'input',
    name: 'installation', 
    message: 'how do you instal your project?', 
  },
  {
    type: 'input',
    name: 'deployedLink', 
    message: 'What is the link to you ployed projeck?', 
   },
   {
    type: 'input',
    name: 'github', 
    message: 'What is your Github username?', 
   },
]

function createReadme(answers) {
    fs.writeFileSync('./READ.md', `
# ${answers.title}
## Description
${answers.description}
## Installation Instructions
${answers.installation}
## Deployed Link
[Deployed link](${answers.deployedLink})
## Github
My github user name is ${answers.github}
`)
}

inq
.prompt(questions)
.then((answers) => {
    // console.log(answers)
    createReadme(answers)
    console.log('Successfully created README.md')
})
.catch((error) =>{
    if (error.isTtyError) {
        console.error('Prompts could not be rendered in current environment!')
    } else {
        console.error(`Something went wrong!`, error)
    }
});


// createReadme()