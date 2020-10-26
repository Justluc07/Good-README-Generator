// function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}
         ${data.gitHub}
         ${data.description}
         ${data.installation}
         ${data.usage}
         ${data.license}
         ${data.contribting}
         ${data.test}
         ${data.question}

`;        
}

module.exports = generateMarkdown;
