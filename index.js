//install packegaes
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

const fs = require("fs");
//import from lib file
const shapeSVG = require("./lib/shapes.js");

inquirer.prompt([
  {
    type: "maxlength-input",
    name: "characters",
    message:
      "What characters do you want to include on SVG? (up to 3 characters)",
    maxLength: 3,
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Which font color do you want? (input a color keyword or a hexadecimal number)",
  },
  {
    type: "list",
    name: "shape",
    message:
      "Which shapes do you want?",
    choice: [
        "circle",
        "triangle",
        "square",
    ],
  },
])
.then((answers) =>{
    // const svgContent = shapeSVG.generateSVG(answers);

    //   fs.writeFile("./examples/1.svg", svgContent, (err) =>
    //     err ? console.log(err) : console.log("Successfully created SVG!")
    //   );
})