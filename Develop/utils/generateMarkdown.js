
function generateMarkdown(data) {
  return ` # ${data.title}
  ## Description
   ${data.Description}
   ##Installation
   ${data.Installation}
    ##Usage
    ${data.Usage}
    ## License
    ${data.License}
   ## Contributing
   ${data.Contributing}
   ## Tests
   ${data.Tests}
   ## Questions
   ${data.Questions}
   
   
  

`;
}

module.exports = generateMarkdown;
