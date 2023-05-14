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
    type: "input",
    name: "shapeColor",
    message:
      "Which shape color do you want? (input a color keyword or a hexadecimal number)",
  },
  {
    type: "list",
    name: "shape",
    message:
      "Which shapes do you want?",
    choices: [
        "circle",
        "triangle",
        "square",
    ]
  },
])
.then((res) =>{
  switch(res){
    case "circle":
      const logoCircle = new shapeSVG.Circle(characters, textColor, shapeColor);
      fs.writeFile("./examples/logo.svg", logoCircle, (err) =>
      err ? console.log(err) : console.log("Successfully created SVG!")
    );
      break;

    case "triangle":
      const logoTriangle = new shapeSVG.Triangle(characters, textColor, shapeColor);
      fs.writeFile("./examples/logo.svg", logoTriangle, (err) =>
      err ? console.log(err) : console.log("Successfully created SVG!")
    );
      break;

    case "square":
      const logoSquare = new shapeSVG.Square(characters, textColor, shapeColor);
      fs.writeFile("./examples/logo.svg", logoSquare, (err) =>
      err ? console.log(err) : console.log("Successfully created SVG!")
    );
      break;
  }
  

      // fs.writeFile("./examples/logo.svg", newShape, (err) =>
      //   err ? console.log(err) : console.log("Successfully created SVG!")
      // );
})