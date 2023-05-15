// Constructor class 
class ShapeEl {
  constructor(characters, textColor, shapeColor) {
    this.characters = characters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

//set up Trangle and use super method to call inherit properties
class Triangle extends ShapeEl {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor, shapeColor);
    this.logo = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="200" width="300">
  <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
  <text x="150" y="150" text-anchor="middle" style ="font-size:60; fill: ${this.textColor};">${this.characters}</text>
  </svg>`;
  }
  
  render(color){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
  }
}
//set up Square and use super method to call inherit properties
class Square extends ShapeEl {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor, shapeColor);
    this.logo = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="200" width="300">
    <rect x="50" y="5"  width="190" height="190" fill="${this.shapeColor}" />
    <text x="145" y="100" text-anchor="middle" style ="font-size:60; fill: ${this.textColor};">${this.characters}</text>
  </svg>`;
  }

  render(color){
    return `<rect x="50" y="5"  width="190" height="190" fill="${color}" />`;
  }
}

//set up Circle and use super method to call inherit properties
class Circle extends ShapeEl {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor, shapeColor);
    this.logo = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="200" width="300">
          <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
          <text x="150" y="100" text-anchor="middle" style ="font-size:60; fill: ${this.textColor};">${this.characters}</text>
        </svg>`;
  }

  render(color){
    return `<circle cx="150" cy="100" r="100" fill="${color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };
