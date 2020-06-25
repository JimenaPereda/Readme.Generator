const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

const questions = [
      {
        type: "input",
        message: "What is your Project name?",
        name: "title"
      },
      {
        type: "input",
        message: "Descrive your project",
        name: "Description"
      },
      {
        type: "input",
        message: "What Comand ypou need to run your application?",
        name: "Installation"
      },
      {
        type: "input",
        message: "What is the purpose of your application?",
        name: "Usage"
      },
      {
        type: "list",
        message: "What Licenses your project have?",
        name: "License",
        choices: ["MIT", "BSD  3", "NONE"]
      },
      {
        type: "input",
        message: "How can you contribute in this project?",
        name: "Contributing"
      },
      {
        type: "input",
        message: "What Comand ypou need to run the tests?",
        name: "Tests"
      },
      {
        type: "input",
        message: "",
        name: "Questions",
      },
     
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName),data)
  
}

function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {
     writeToFile("README.md", generateMarkdown({...response}))
     
    
    });
}

init();

