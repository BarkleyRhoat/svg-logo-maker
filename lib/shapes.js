class shapes {
  //constructor sets initial color
  constructor(color) {
    this.color = color;
  }
  
  // Method to update the color of the shape
  setColor(color) {
    this.color = color;
  }
  
  // Method to set the text content and text color for the shape
  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  // rendering 
  render() {
    return '';
  }
}

class Square extends shapes {
  constructor(color) {
    super(color);
  }

  // Render method generates SVG markup for a Square
  render() {
    return `<svg width="300" height="200">
    <rect width="300" height="200" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

class Triangle extends shapes {
  constructor(color) {
    super(color);
  }

   // Render method generates SVG markup for a Triangle
  render() {
    return `<svg width="300" height="200">
    <polygon points="200,10 250,210 160,210" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
}
  }


class Circle extends shapes {
  constructor(color) {
    super(color);
  }

 // Render method generates SVG markup for a Circle
  render() {
    return `<svg width="300" height="200">
      <circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}


// Exporting the shapes class and its subclasses for use in other modules
module.exports = { shapes, Square, Triangle, Circle };
