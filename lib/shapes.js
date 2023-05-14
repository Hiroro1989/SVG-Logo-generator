class ShapeEl {
  constructor(characters, textColor, shapeColor) {
    this.characters = characters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class ShapeEx extends ShapeEl {
  constructor(characters, textColor, shapeColor, shape) {
    super(characters, textColor, shapeColor);
    switch (shape) {
      //need to add
      case "circle":
        this.logo = `<svg height="200" width="300">
          <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
          <text x="150" y="100" text-anchor="middle" fill="${this.textColor};">${this.characters}</text>
        </svg>`;
        break;

      case "triangle":
        this.logo = `<svg height="200" width="300">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="150" text-anchor="middle" fill="${this.textColor};">${this.characters}</text>
      </svg>`;
        break;

      case "square":
        this.logo = `<svg height="200" width="300">
        <rect x="50" y="5"  width="190" height="190" fill="${this.shapeColor}" />
        <text x="145" y="150" text-anchor="middle" fill="${this.textColor};">${this.characters}</text>
      </svg>`;

      default:
        this.logo = "";
    }
  }
}

// const generateSVG = ({
//   characters,
//   textColor,
//   shape,
//   shapeColor,
// }) => `<svg height="200" width="300">
// <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
// </svg>`;

module.exports = {
  ShapeEx,
};
