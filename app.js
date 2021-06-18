// const generatePage = () => "Name: Jane, Github: janehub";
// const generatePage = (userName, githubName) =>
//   `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage("Jane", "janehub"));

///************/
// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//   `;
// };
// console.log(generatePage("Jane", "janehub"));
//************************************* */

//****DESTRUCTING ASSIGNMENT */

// const generatePage = {
//   name: "Jane",
//   gitHub: "janehub",
// };
// const { name, gitHub } = generatePage;
// const userName = `User name is: ${name}`;
// const userGithub = ` and user github is ${gitHub}`;

// console.log(generatePage);
//******************** */

// const fs = require("fs");
// const generatePage = require("./src/page-template");

// const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;

// console.log(name, github);

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

const fs = require("fs");
const generatePage = require("./src/page-template.js");
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Portfolio complete! Check out index.html to see the output!");
});
