// {/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg> */}

//circle
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    render() {
      return `
        <svg width="${this.radius * 2}" height="${this.radius * 2}" xmlns="http://www.w3.org/2000/svg">
          <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
        </svg>
      `;
    }
  }
  
  module.exports = Circle;


  //triangle
  class Triangle {
    constructor(base, color) {
      this.base = base;
      this.color = color;
    }
  
    render() {
      const height = Math.sqrt(3) / 2 * this.base;
      return `
        <svg width="${this.base}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,${height} ${this.base / 2},0 ${this.base},${height}" fill="${this.color}" />
        </svg>
      `;
    }
  }
  
  module.exports = Triangle;

  //square 
  class Square {
    constructor(side, color) {
      this.side = side;
      this.color = color;
    }
  
    render() {
      return `
        <svg width="${this.side}" height="${this.side}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${this.side}" height="${this.side}" fill="${this.color}" />
        </svg>
      `;
    }
  }
  
  module.exports = Square;