const generateSVG = ({
  characters,
  textColor,
  shape,
  shapeColor,
}) => `<svg height="200" width="300">
<polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
</svg>`;


module.exports = {
    Circle,
    square,
    Traiangle,
}