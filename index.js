const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown") 

// array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
         message:"please enter Project title"
    },
    {
        type:"input",
        name:"gitHub",
         message:"What is you Github username"
    },
    {
        type:"input",
        name:"description",
         message:"Description of the project"
    },
    {
        type:"input",
        name:"installation",
         message:"how to install"
    },
    {
        type:"input",
        name:"usage",
         message:"how can this be used"
    },
    {
        type:"input",
        name:"license",
         message:"license"
    },
    {
        type:"input",
        name:"contribting",
         message:"contribting"
    },
    {
        type:"input",
        name:"test",
         message:"test"
    },
    {
        type:"input",
        name:"question",
         message:"any question?"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses)=>{
        console.log("generationReadMeFile")
        writeToFile("readme.md",generateMarkdown({...inquirerResponses}))
    })
}

// function call to initialize program
init();
